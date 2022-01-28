
import { serverUrl, appId } from "../../.env.json"
Moralis.start({ serverUrl, appId });

const form  = document.getElementById('project-form');

const overlay = document.getElementById('overlay')
document.getElementById("login_button").onclick = login;
document.getElementById("logout_button").onclick = logout;
document.getElementById("Events").onclick = openModal;
document.getElementById("close-button").onclick = closeModal;
const pastEventTable = document.getElementById("pastEventID")
const pastEventBtn = document.getElementById("pastEventBtn")
pastEventBtn.onclick = getEvent;

const state = {
  'current_user':null,
  'instance':null,
  'web3':null
}

async function renderApp() {
  document.getElementById("login_button").style.display = "none";
  document.getElementById("logout_button").style.display = "inline-block";
  document.getElementById("logout_button").style.display = "block";
  window.web3 = await Moralis.enableWeb3();
  let instance = new web3.eth.Contract(window.abi.abi, "0x48CA598C8534700779C122cd45f79A2B926f6e4F");
  
  if(!state.instance){
    state.instance = instance
  }
  if(!state.web3){
    state.web3 = web3
  }
  
  let x = await instance.methods.currentEvent().call()
  let event = await instance.methods.events(x).call()
  
  var myDate = new Date(event.endTime * 1000);
  document.getElementById("endTime").innerHTML = myDate.toLocaleString()
  document.getElementById("prize").innerHTML = web3.utils.fromWei(event.prize,'ether') +" Avax"
  document.getElementById("numberOfProjects").innerHTML = event.propIdCounter
  
  document.getElementById("eventnumber").innerHTML = event.eventId
  
}


function displayErrorMessage(message) {

  document.getElementById("error_text").innerHTML = message;
  document.getElementById("error").style.display = "block";

}
async function init() {
  const user = Moralis.User.current();

    if (user) {
      state.current_user = user
      document.getElementById("login_button").style.display = "none";
      renderApp()
     
    } else {
        document.getElementById("login_button").style.display = "inline-block";
        document.getElementById("login_button").style.display = "block";
        document.getElementById("logout_button").style.display = "none";


    }
}
  
async function login() {
  try {
    user = await Moralis.authenticate();
    
    if(user){
        state.current_user = user
        renderApp();
    }
  } catch (error) {
    displayErrorMessage(error);
  }
}

async function logout() {
  await Moralis.User.logOut();
  state.current_user = null;
  init();
}

async function add_project(form){

  const projectname = form['projectname'].value
  const username = form['username'].value
  const githublink = form['githublink'].value
  const description = form['description'].value

  let amount = 0.1;

  let currentEvent = await state.instance.methods.currentEvent().call()

  state.instance.methods.addProp(Number(currentEvent)).send({value:state.web3.utils.toWei(amount.toString(),'ether'), from:ethereum.selectedAddress})
  .on('receipt',async function(receipt){
    const ProjectObject = Moralis.Object.extend("Project")
    const project = new ProjectObject();


    project.set('EventID', currentEvent)
    project.set('projectname', projectname)
    project.set('username', username)
    project.set('githublink', githublink)
    project.set('description', description)
    project.set('maker', state.current_user.get('ethAddress'))


    await project.save()
  })
}


async function openModal() {
  modal = document.getElementById("modal")
 
  if (modal == null) return
  modal.classList.add('active')
  display_proposals()
  overlay.classList.add('active')
}

function closeModal() {
  modal = document.getElementById("modal")
  
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

async function display_proposals(){

    let instance = state.instance;
    let currentEvent = await instance.methods.currentEvent().call()
    let eveti = await instance.methods.events(currentEvent).call()
    let propID = Number(eveti.propIdCounter) - 1 
    let proposals = []


    for (i = 0;i<=propID;i++){
      let proposal = await instance.methods.getProposals(currentEvent, i).call()
      proposals.push(proposal)
    }


    let table = document.getElementById('prop-table');

    while(table.lastElementChild){
      table.removeChild(table.lastElementChild)
    }

    let rowH = document.createElement('tr')

    let projectnameH = document.createElement('th')
    let makerH = document.createElement('th')
    let votesH = document.createElement('th')

    projectnameH.setAttribute('class','headlineThPn')
    makerH.setAttribute('class','headlineThM')
    votesH.setAttribute('class','headlineThV')

    projectnameH.innerHTML="projectname"
    makerH.innerHTML="maker"
    votesH.innerHTML="votes"

    rowH.appendChild(projectnameH)
    rowH.appendChild(makerH)
    rowH.appendChild(votesH)


    table.appendChild(rowH)

    proposals.forEach(async (element) =>{

      const query = new Moralis.Query("Project")
      query.equalTo("maker", element._maker.toLowerCase())
      query.equalTo("EventID", currentEvent.toString())
      const res = await query.first()

      let tr = document.createElement('tr');

      let tdUserName = document.createElement('td');
      let tdMaker = document.createElement('td');
      let tdVotes = document.createElement('td');
      let voteBtn = document.createElement('button');

      voteBtn.setAttribute('class','VoteBtn')
      voteBtn.setAttribute('onClick','handleVote(this)')
      voteBtn.setAttribute('id', element._proposalID)

      voteBtn.innerHTML = "Vote";
      tdUserName.innerHTML = res.get('username') ? res : '-'
      tdMaker.innerHTML = element._maker;
      tdVotes.innerHTML = element._voteCount;


      tr.appendChild(tdUserName)
      tr.appendChild(tdMaker)
      tr.appendChild(tdVotes)
      tr.appendChild(voteBtn)

      table.appendChild(tr)
    })
}


async function handleVote(elem){
  id = elem.getAttribute('id')
  let fee = 0.1;
  let currentEvent = await state.instance.methods.currentEvent().call();
  state.instance.methods.voteOnProposal(currentEvent, id).send({value:state.web3.utils.toWei(fee.toString(),'ether'), from:ethereum.selectedAddress})
  .on('receipt',async function(receipt){
    closeModal()

  })

}

async function handleVoteinput(elem){
    elem.setAttribute('value',elem.value)
}


//displaying past events
async function getEvent(elem){
  let instance = state.instance;
  let eventID =pastEventBtn.getAttribute('val')

  let currentEvent = await instance.methods.currentEvent().call()
  if(isNaN(eventID) || eventID > currentEvent || Number(eventID) <=0){
    return
  }
  let event = await instance.methods.events(eventID).call()
  let endDate = new Date(event.endTime * 1000 )
  let winningProps = await getWinningProposals(eventID)
  addToTable(winningProps, endDate, event.prize, eventID)
  
}


async function addToTable(winningProps, endDate, prize, eventID){
  
  if(winningProps.length === 0){
    return
  }
  let cut = prize / winningProps.length
  let table = document.getElementById('tablePastEvent')

  // cleaning the table from last Search
  while(table.lastElementChild){
    table.removeChild(table.lastElementChild)
  }

  // creating the header of the table
  let tableHead = document.createElement('thead')

  //event row
  let trEvent = document.createElement('tr')

  //eventID col
  let tdEvent = document.createElement('td')
  tdEvent.innerHTML = 'event '
  let spanEvent = document.createElement('span')
  spanEvent.innerHTML = eventID
  tdEvent.appendChild(spanEvent)

  //event prize col
  let tdEventPrize = document.createElement('td')
  tdEventPrize.innerHTML = 'Prize '
  let spanEventPrize = document.createElement('span')
  spanEventPrize.innerHTML = Number(state.web3.utils.fromWei(prize, 'ether')).toFixed(2) + " Avax"
  tdEventPrize.appendChild(spanEventPrize)

  //event date Col
  let tdCloseTime = document.createElement('td')
  tdCloseTime.innerHTML = 'Close Date '
  let spanCloseTime = document.createElement('span')
  spanCloseTime.innerHTML = endDate.toLocaleDateString()
  tdCloseTime.appendChild(spanCloseTime)


  trEvent.appendChild(tdEvent)
  trEvent.appendChild(tdEventPrize)
  trEvent.appendChild(tdCloseTime)

  tableHead.appendChild(trEvent)

  table.appendChild(tableHead)

  let tableBody = document.createElement("tbody")
  tableBody.setAttribute('id','pastEventID')

  let tr = document.createElement('tr')
  let td1 = document.createElement('th')
  let td2 = document.createElement('th')
  let td3 = document.createElement('th')

  td1.innerHTML = "reward"
  td2.innerHTML = "Winners"
  td3.innerHTML = "Total Votes"

  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.appendChild(td3)

  tableBody.appendChild(tr)


  for(i = 0;i<winningProps.length;i++){
    let tr = document.createElement('tr')
    let closedDate = document.createElement('td')
    let Eventmaker = document.createElement('td')
    let EventVotes = document.createElement('td')

    closedDate.innerHTML = Number(state.web3.utils.fromWei(cut.toString(), 'ether')).toFixed(2)
    Eventmaker.innerHTML = winningProps[0]._maker
    EventVotes.innerHTML = winningProps[0]._voteCount

    tr.appendChild(closedDate)
    tr.appendChild(Eventmaker)
    tr.appendChild(EventVotes)

    tableBody.appendChild(tr)
  }
  table.appendChild(tableBody)


}
async function getWinningProposals(eventID){
  let instance = state.instance;
  
  let winningProps = await instance.methods.getWinningProposals(eventID).call();
  let  proposals = []
  for(i = 0;i<winningProps.length;i++){
    let prop = await instance.methods.getProposals(eventID, winningProps[i]).call();
    proposals.push(prop);
  }
  return proposals;
}

window.pastEventInputChange = function pastEventInputChange(elem){
  pastEventBtn.setAttribute('val', elem.value)
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if(state.current_user){
  // stop form submission
      add_project(form)
 }
  
});



overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})


init()