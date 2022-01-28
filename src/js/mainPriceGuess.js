import { serverUrl, appId } from "../../.env.json"

Moralis.start({ serverUrl, appId });

window.ethereum.on('accountsChanged', function (accounts) {
  state.current_user = accounts[0]
  getUserRounds(accounts[0])
  displayAccount(accounts[0])
})




const state = {
    'current_user':null,
    'instance':null,
    'web3':null,
    'curr' : null,
    'aggro':null,
    'price':null,
    
    'currentRound':{
      
      'id':null,
      'prize':null,
      'upPayout':null,
      'downPayout':null,
      'lockTimestamp':null
    },
    'lockedRound':{
      'id':null,
      'prize':null,
      'upPayout':null,
      'downPayout':null,
      'lockPrice':null
      
    },
    'closedRound':{
      'id':null,
      'prize':null,
      'upPayout':null,
      'downPayout':null,
      'closePrice':null,
      'lockPrice':null
    }
}

  

async function renderApp() {
    
    document.getElementById("login_button").style.display = "none";
    document.getElementById("logout_button").style.display = "inline-block";
    document.getElementById("logout_button").style.display = "block";

    window.web3 = await Moralis.enableWeb3();
    let instance = new web3.eth.Contract(window.ZGabi.abi, "0x6C96a69594f24C7FAd66b66ded57a21D6EFC9c52");
    state.aggro = new web3.eth.Contract(window.Aggroabi.abi, "0x5498BB86BC934c8D34FDA08E81D444153d0D06aD")
    
   
    let accounts = await web3.eth.getAccounts()
    state.current_user = accounts[0]
    if(!state.instance){
      state.instance = instance
    }
    if(!state.web3){
      state.web3 = web3
    }
    displayAccount()
    await updateStates();
    getUserRounds(accounts[0])

    setInterval(handleTime, 1000)
}


async function displayAccount(){
  let addressElem = document.getElementById("address-span")
  let funds = document.getElementById("funds")
  addressElem.innerHTML = state.current_user
  funds.innerHTML = parseFloat(web3.utils.fromWei(await web3.eth.getBalance(state.current_user),'ether')).toFixed(2) + " Avax"

}
async function handleTime(){
    let currentTime = Math.floor(new Date().getTime()/1000)
    let timeLeft = state.currentRound.lockTimestamp - currentTime
    if(timeLeft <= 0){
      await updateStates();
      document.getElementById("Time").innerHTML = "calculating rewards"

      return
    }
    document.getElementById("Time").innerHTML = state.currentRound.lockTimestamp - currentTime
    
    
}




async function updateStates(){
  await getPricefromOracle()
  await upDateStateCurrentRound()
  await upDateStateLockedRound()
  await upDateStateClosedRound()
  
}

async function getPricefromOracle(){
  res  = await state.aggro.methods.latestRoundData().call();
  price = res['answer']/100000000
  document.getElementById("current-price").innerHTML = "$" + price.toFixed(2)
  document.getElementById("last-price").innerHTML = "$" + price.toFixed(2)

}

async function betUp(){
  let value = document.getElementById("amount").value;
  if(!value || !state.currentRound.id){
    return
  }
  state.instance.methods.betUp(state.currentRound.id).send({value:state.web3.utils.toWei(value,'ether'), from:ethereum.selectedAddress})
  .on('receipt',async function(receipt){
    console.log(receipt)
    updateStates();
    
  })

}
async function betDown(){
  let value = document.getElementById("amount").value;
  if(!value || !state.currentRound.id){
    return
  }
  state.instance.methods.betDown(state.currentRound.id).send({value:state.web3.utils.toWei(value,'ether'), from:ethereum.selectedAddress})
  .on('receipt',async function(receipt){
    console.log(receipt)
    updateStates();
    
  })

}



async function login() {
    try {

      user = await Moralis.authenticate();
      
      if(user){
          state.current_user = user
          renderApp();
      }
    } catch (error) {
      console.log(error);
      displayErrorMessage(error);
    }
}

async function logout() {
    await Moralis.User.logOut();
    state.current_user = null;
    init();
}

async function init() {
    const user = Moralis.User.current();
  
      if (user) {
        state.current_user = user
        document.getElementById("login_button").style.display = "none";
        renderApp()
       
      }else{
          document.getElementById("login_button").style.display = "inline-block";
          document.getElementById("login_button").style.display = "block";
          document.getElementById("logout_button").style.display = "none";
      }
}


async function upDateStateCurrentRound(){
  let roundID = await state.instance.methods.currentRound().call()
  let currentRound = await state.instance.methods.rounds(roundID).call()

  state.currentRound.id = Number(currentRound.episode)
  state.currentRound.prize = Number(currentRound.totalAmount)
  state.currentRound.upPayout = Number(currentRound.upAmount)
  state.currentRound.downPayout = Number(currentRound.downAmount)
  state.currentRound.lockTimestamp = Number(currentRound.lockTimestamp)


  document.getElementById("nextRound-id").innerHTML = state.currentRound.id
  document.getElementById("prizePool-nextRound").innerHTML =  (state.currentRound.prize / 1000000000000000000).toFixed(2)
  document.getElementById("upPayout-nextRound").innerHTML =   calcPayout(state.currentRound.prize,state.currentRound.upPayout) + "x Payout"
  document.getElementById("downPayout-nextRound").innerHTML = calcPayout(state.currentRound.prize,state.currentRound.downPayout) + "x Payout"




}
async function upDateStateLockedRound(){
  let round = state.currentRound.id - 1
  if (round <= 0){
    return;
  }
  let currentRound = await state.instance.methods.rounds(round).call()

  state.lockedRound.id = Number(currentRound.episode)
  state.lockedRound.prize = Number(currentRound.totalAmount)
  state.lockedRound.upPayout = Number(currentRound.upAmount)
  state.lockedRound.downPayout = Number(currentRound.downAmount)
  state.lockedRound.lockPrice = Number(currentRound.lockprice)

  

  document.getElementById("currentRound-id").innerHTML = state.lockedRound.id
  document.getElementById("lockedPrice-currentRound").innerHTML =  (state.lockedRound.lockPrice / 100000000).toFixed(2)
  document.getElementById("prizePool-currentRound").innerHTML =  (state.lockedRound.prize / 1000000000000000000).toFixed(2)
  document.getElementById("upPayout-currentRound").innerHTML =   calcPayout(state.lockedRound.prize,state.lockedRound.upPayout) + "x Payout"
  document.getElementById("downPayout-currentRound").innerHTML = calcPayout(state.lockedRound.prize,state.lockedRound.downPayout) + "x Payout"


}
async function upDateStateClosedRound(){
  let round = state.currentRound.id - 2
  if(round<=0){
    return;
  }
  let currentRound = await state.instance.methods.rounds(round).call()

  state.closedRound.id = Number(currentRound.episode)
  state.closedRound.prize = Number(currentRound.totalAmount)
  state.closedRound.upPayout = Number(currentRound.upAmount)
  state.closedRound.downPayout = Number(currentRound.downAmount)
  state.closedRound.lockPrice = Number(currentRound.lockprice)
  state.closedRound.closePrice = Number(currentRound.closeprice)

  document.getElementById("closedRound-id").innerHTML = state.closedRound.id
  document.getElementById("closedPrice-closedRound").innerHTML =  (state.closedRound.closePrice / 100000000).toFixed(2)
  document.getElementById("lockedPrice-closedRound").innerHTML =  (state.closedRound.lockPrice / 100000000).toFixed(2)
  document.getElementById("prizePool-closedRound").innerHTML =  (state.closedRound.prize  / 1000000000000000000).toFixed(2)
  document.getElementById("upPayout-closedRound").innerHTML =   calcPayout(state.closedRound.prize,state.closedRound.upPayout) + "x Payout"
  document.getElementById("downPayout-closedRound").innerHTML = calcPayout(state.closedRound.prize,state.closedRound.downPayout) + "x Payout"


}


function calcPayout(totalVal, poolvalue){
    if (poolvalue===0){
      return 0;
    }
    return (totalVal / poolvalue).toFixed(2);
}


// getting user Rounds, and adding elements to The Dom

async function getUserRounds(account){
  let len = await state.instance.methods.getUserRoundsLength(account).call()
  let res = await state.instance.methods.getUserRounds(account, 0, len).call()
  let roundIdDiv = document.getElementById("userRoundsID")
  let roundstandDiv = document.getElementById("userRoundsStand")
  let roundAmountDiv = document.getElementById("userRoundsAmount")
  let claimBtn = document.getElementById("claimBtn")

  

  console.log(len)
  while(roundIdDiv.lastElementChild){
    roundIdDiv.removeChild(roundIdDiv.lastElementChild)
  }
  while(roundstandDiv.lastElementChild){
    roundstandDiv.removeChild(roundstandDiv.lastElementChild)
  }
  while(roundAmountDiv.lastElementChild){
    roundAmountDiv.removeChild(roundAmountDiv.lastElementChild)
  }
  while(claimBtn.lastElementChild){
    claimBtn.removeChild(claimBtn.lastElementChild)
  }


  for(i=0;i<len;i++){
    roundID = res['0'][i]
    betInfo = res['1'][i]
    let idDiv = document.createElement('div')
    let amountDiv = document.createElement('div')
    let standDiv = document.createElement('div')
    let btn = document.createElement('div')

    btn.setAttribute('class','buttonClaim')
    btn.setAttribute('value',roundID)
    btn.setAttribute('onClick',"claim(this)")

    idDiv.innerHTML = roundID
    standDiv.innerHTML = betInfo.stand == 0 ? "up" : "down"
    amountDiv.innerHTML =  (betInfo.amount / 1000000000000000000)
    btn.innerHTML = await claimable(roundID,betInfo.claimable) ?   "<p>claim now</p>" : "<p>not Claimable</p>"
    

    roundIdDiv.appendChild(idDiv)
    roundstandDiv.appendChild(standDiv)
    roundAmountDiv.appendChild(amountDiv)
    claimBtn.appendChild(btn)


  }

}


async function claimable(roundID){
  //if (!_claimable){
  //    return false;
  //}
  console.log(state.current_user)
  let check = await state.instance.methods.claimable(roundID , state.current_user).call()
  if(!check){
    return false;
  }
  return true;
}


async function claim(elem){
  roundID = elem.getAttribute('value')
  if(!claimable(roundID)){
    return
  }

  state.instance.methods.claim([roundID]).send({from:ethereum.selectedAddress})
  .on('receipt',async function(receipt){
    console.log("claimed!")
  })
}


window.pastRoundInputChange =  async function pastRoundInputChange(item){
  pastRoundBtn.setAttribute('val', item.value)
}

async function getPastRound(){
  val = pastRoundBtn.getAttribute('val')
  let round = await state.instance.methods.rounds(val).call()
  
  var closeTimestamp = new Date(round.closeTimestamp * 1000);
  document.getElementById("pastRoundID").innerHTML = val

  document.getElementById("pastRoundclosedtime").innerHTML = closeTimestamp.toLocaleString()
  document.getElementById("pastRoundLockedprice").innerHTML = round.lockprice
  document.getElementById("pastRoundClosedprice").innerHTML = round.closeprice
  document.getElementById("pastRoundPayOut").innerHTML = round.totalAmount

}

document.getElementById("login_button").onclick = login;
document.getElementById("logout_button").onclick = logout;
document.getElementById("bet-up").onclick = betUp;
document.getElementById("bet-down").onclick = betDown;
const pastRoundBtn = document.getElementById("pastRoundBtn");
pastRoundBtn.onclick = getPastRound



init()