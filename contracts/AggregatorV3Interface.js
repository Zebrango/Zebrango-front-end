window.Aggroabi = {
  "contractName": "AggregatorV3Interface",
  "abi": [
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "description",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "version",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint80",
          "name": "_roundId",
          "type": "uint80"
        }
      ],
      "name": "getRoundData",
      "outputs": [
        {
          "internalType": "uint80",
          "name": "roundId",
          "type": "uint80"
        },
        {
          "internalType": "int256",
          "name": "answer",
          "type": "int256"
        },
        {
          "internalType": "uint256",
          "name": "startedAt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "updatedAt",
          "type": "uint256"
        },
        {
          "internalType": "uint80",
          "name": "answeredInRound",
          "type": "uint80"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "latestRoundData",
      "outputs": [
        {
          "internalType": "uint80",
          "name": "roundId",
          "type": "uint80"
        },
        {
          "internalType": "int256",
          "name": "answer",
          "type": "int256"
        },
        {
          "internalType": "uint256",
          "name": "startedAt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "updatedAt",
          "type": "uint256"
        },
        {
          "internalType": "uint80",
          "name": "answeredInRound",
          "type": "uint80"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.4+commit.c7e474f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"description\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint80\",\"name\":\"_roundId\",\"type\":\"uint80\"}],\"name\":\"getRoundData\",\"outputs\":[{\"internalType\":\"uint80\",\"name\":\"roundId\",\"type\":\"uint80\"},{\"internalType\":\"int256\",\"name\":\"answer\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"startedAt\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updatedAt\",\"type\":\"uint256\"},{\"internalType\":\"uint80\",\"name\":\"answeredInRound\",\"type\":\"uint80\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestRoundData\",\"outputs\":[{\"internalType\":\"uint80\",\"name\":\"roundId\",\"type\":\"uint80\"},{\"internalType\":\"int256\",\"name\":\"answer\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"startedAt\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updatedAt\",\"type\":\"uint256\"},{\"internalType\":\"uint80\",\"name\":\"answeredInRound\",\"type\":\"uint80\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"version\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/AggregatorV3Interface.sol\":\"AggregatorV3Interface\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/AggregatorV3Interface.sol\":{\"keccak256\":\"0x547cb62c9265509052e2898a888c6254d883990ed9d5d10258f99092a23e899d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9b6d1bd613834672a03f46d4ac2bd22b22ec852262888ee0240f9165bbf3f562\",\"dweb:/ipfs/QmYDBxs5VyA5Cz8bdX9Yk7YTFyETDicbhrtQ3m1jnXY3Vg\"]}},\"version\":1}",
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "// SPDX-License-Identifier: MIT\r\npragma solidity ^0.8.0;\r\n\r\ninterface AggregatorV3Interface {\r\n\r\n  function decimals()\r\n    external\r\n    view\r\n    returns (\r\n      uint8\r\n    );\r\n\r\n  function description()\r\n    external\r\n    view\r\n    returns (\r\n      string memory\r\n    );\r\n\r\n  function version()\r\n    external\r\n    view\r\n    returns (\r\n      uint256\r\n    );\r\n\r\n  // getRoundData and latestRoundData should both raise \"No data present\"\r\n  // if they do not have data to report, instead of returning unset values\r\n  // which could be misinterpreted as actual reported values.\r\n  function getRoundData(\r\n    uint80 _roundId\r\n  )\r\n    external\r\n    view\r\n    returns (\r\n      uint80 roundId,\r\n      int256 answer,\r\n      uint256 startedAt,\r\n      uint256 updatedAt,\r\n      uint80 answeredInRound\r\n    );\r\n\r\n  function latestRoundData()\r\n    external\r\n    view\r\n    returns (\r\n      uint80 roundId,\r\n      int256 answer,\r\n      uint256 startedAt,\r\n      uint256 updatedAt,\r\n      uint80 answeredInRound\r\n    );\r\n\r\n}\r\n",
  "sourcePath": "C:\\Users\\Nutzer\\Documents\\zebrango\\Zebrango-protocl\\contracts\\AggregatorV3Interface.sol",
  "ast": {
    "absolutePath": "project:/contracts/AggregatorV3Interface.sol",
    "exportedSymbols": {
      "AggregatorV3Interface": [
        45
      ]
    },
    "id": 46,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:0"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "id": 45,
        "linearizedBaseContracts": [
          45
        ],
        "name": "AggregatorV3Interface",
        "nameLocation": "70:21:0",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "functionSelector": "313ce567",
            "id": 6,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "decimals",
            "nameLocation": "108:8:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "116:2:0"
            },
            "returnParameters": {
              "id": 5,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6,
                  "src": "165:5:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 3,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "165:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "156:21:0"
            },
            "scope": 45,
            "src": "99:79:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "7284e416",
            "id": 11,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "description",
            "nameLocation": "193:11:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "204:2:0"
            },
            "returnParameters": {
              "id": 10,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11,
                  "src": "253:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "253:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "244:29:0"
            },
            "scope": 45,
            "src": "184:90:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "54fd4d50",
            "id": 16,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "version",
            "nameLocation": "289:7:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "296:2:0"
            },
            "returnParameters": {
              "id": 15,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 16,
                  "src": "345:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "345:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "336:23:0"
            },
            "scope": 45,
            "src": "280:80:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "9a6fc8f5",
            "id": 31,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getRoundData",
            "nameLocation": "589:12:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18,
                  "mutability": "mutable",
                  "name": "_roundId",
                  "nameLocation": "615:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "608:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint80",
                    "typeString": "uint80"
                  },
                  "typeName": {
                    "id": 17,
                    "name": "uint80",
                    "nodeType": "ElementaryTypeName",
                    "src": "608:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint80",
                      "typeString": "uint80"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "601:27:0"
            },
            "returnParameters": {
              "id": 30,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21,
                  "mutability": "mutable",
                  "name": "roundId",
                  "nameLocation": "682:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "675:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint80",
                    "typeString": "uint80"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "uint80",
                    "nodeType": "ElementaryTypeName",
                    "src": "675:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint80",
                      "typeString": "uint80"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23,
                  "mutability": "mutable",
                  "name": "answer",
                  "nameLocation": "705:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "698:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 22,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "698:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25,
                  "mutability": "mutable",
                  "name": "startedAt",
                  "nameLocation": "728:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "720:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 24,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "720:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27,
                  "mutability": "mutable",
                  "name": "updatedAt",
                  "nameLocation": "754:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "746:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "746:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29,
                  "mutability": "mutable",
                  "name": "answeredInRound",
                  "nameLocation": "779:15:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "772:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint80",
                    "typeString": "uint80"
                  },
                  "typeName": {
                    "id": 28,
                    "name": "uint80",
                    "nodeType": "ElementaryTypeName",
                    "src": "772:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint80",
                      "typeString": "uint80"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "666:135:0"
            },
            "scope": 45,
            "src": "580:222:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "feaf968c",
            "id": 44,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "latestRoundData",
            "nameLocation": "817:15:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "832:2:0"
            },
            "returnParameters": {
              "id": 43,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34,
                  "mutability": "mutable",
                  "name": "roundId",
                  "nameLocation": "888:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 44,
                  "src": "881:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint80",
                    "typeString": "uint80"
                  },
                  "typeName": {
                    "id": 33,
                    "name": "uint80",
                    "nodeType": "ElementaryTypeName",
                    "src": "881:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint80",
                      "typeString": "uint80"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36,
                  "mutability": "mutable",
                  "name": "answer",
                  "nameLocation": "911:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 44,
                  "src": "904:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 35,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "904:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 38,
                  "mutability": "mutable",
                  "name": "startedAt",
                  "nameLocation": "934:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 44,
                  "src": "926:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 37,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "926:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 40,
                  "mutability": "mutable",
                  "name": "updatedAt",
                  "nameLocation": "960:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 44,
                  "src": "952:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "952:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 42,
                  "mutability": "mutable",
                  "name": "answeredInRound",
                  "nameLocation": "985:15:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 44,
                  "src": "978:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint80",
                    "typeString": "uint80"
                  },
                  "typeName": {
                    "id": 41,
                    "name": "uint80",
                    "nodeType": "ElementaryTypeName",
                    "src": "978:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint80",
                      "typeString": "uint80"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "872:135:0"
            },
            "scope": 45,
            "src": "808:200:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 46,
        "src": "60:953:0",
        "usedErrors": []
      }
    ],
    "src": "33:982:0"
  },
  "legacyAST": {
    "absolutePath": "project:/contracts/AggregatorV3Interface.sol",
    "exportedSymbols": {
      "AggregatorV3Interface": [
        45
      ]
    },
    "id": 46,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:0"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "id": 45,
        "linearizedBaseContracts": [
          45
        ],
        "name": "AggregatorV3Interface",
        "nameLocation": "70:21:0",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "functionSelector": "313ce567",
            "id": 6,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "decimals",
            "nameLocation": "108:8:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "116:2:0"
            },
            "returnParameters": {
              "id": 5,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6,
                  "src": "165:5:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 3,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "165:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "156:21:0"
            },
            "scope": 45,
            "src": "99:79:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "7284e416",
            "id": 11,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "description",
            "nameLocation": "193:11:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "204:2:0"
            },
            "returnParameters": {
              "id": 10,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11,
                  "src": "253:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "253:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "244:29:0"
            },
            "scope": 45,
            "src": "184:90:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "54fd4d50",
            "id": 16,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "version",
            "nameLocation": "289:7:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "296:2:0"
            },
            "returnParameters": {
              "id": 15,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 16,
                  "src": "345:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "345:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "336:23:0"
            },
            "scope": 45,
            "src": "280:80:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "9a6fc8f5",
            "id": 31,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getRoundData",
            "nameLocation": "589:12:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18,
                  "mutability": "mutable",
                  "name": "_roundId",
                  "nameLocation": "615:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "608:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint80",
                    "typeString": "uint80"
                  },
                  "typeName": {
                    "id": 17,
                    "name": "uint80",
                    "nodeType": "ElementaryTypeName",
                    "src": "608:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint80",
                      "typeString": "uint80"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "601:27:0"
            },
            "returnParameters": {
              "id": 30,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21,
                  "mutability": "mutable",
                  "name": "roundId",
                  "nameLocation": "682:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "675:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint80",
                    "typeString": "uint80"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "uint80",
                    "nodeType": "ElementaryTypeName",
                    "src": "675:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint80",
                      "typeString": "uint80"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23,
                  "mutability": "mutable",
                  "name": "answer",
                  "nameLocation": "705:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "698:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 22,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "698:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25,
                  "mutability": "mutable",
                  "name": "startedAt",
                  "nameLocation": "728:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "720:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 24,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "720:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27,
                  "mutability": "mutable",
                  "name": "updatedAt",
                  "nameLocation": "754:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "746:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "746:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29,
                  "mutability": "mutable",
                  "name": "answeredInRound",
                  "nameLocation": "779:15:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 31,
                  "src": "772:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint80",
                    "typeString": "uint80"
                  },
                  "typeName": {
                    "id": 28,
                    "name": "uint80",
                    "nodeType": "ElementaryTypeName",
                    "src": "772:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint80",
                      "typeString": "uint80"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "666:135:0"
            },
            "scope": 45,
            "src": "580:222:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "feaf968c",
            "id": 44,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "latestRoundData",
            "nameLocation": "817:15:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "832:2:0"
            },
            "returnParameters": {
              "id": 43,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34,
                  "mutability": "mutable",
                  "name": "roundId",
                  "nameLocation": "888:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 44,
                  "src": "881:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint80",
                    "typeString": "uint80"
                  },
                  "typeName": {
                    "id": 33,
                    "name": "uint80",
                    "nodeType": "ElementaryTypeName",
                    "src": "881:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint80",
                      "typeString": "uint80"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36,
                  "mutability": "mutable",
                  "name": "answer",
                  "nameLocation": "911:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 44,
                  "src": "904:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 35,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "904:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 38,
                  "mutability": "mutable",
                  "name": "startedAt",
                  "nameLocation": "934:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 44,
                  "src": "926:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 37,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "926:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 40,
                  "mutability": "mutable",
                  "name": "updatedAt",
                  "nameLocation": "960:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 44,
                  "src": "952:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "952:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 42,
                  "mutability": "mutable",
                  "name": "answeredInRound",
                  "nameLocation": "985:15:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 44,
                  "src": "978:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint80",
                    "typeString": "uint80"
                  },
                  "typeName": {
                    "id": 41,
                    "name": "uint80",
                    "nodeType": "ElementaryTypeName",
                    "src": "978:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint80",
                      "typeString": "uint80"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "872:135:0"
            },
            "scope": 45,
            "src": "808:200:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 46,
        "src": "60:953:0",
        "usedErrors": []
      }
    ],
    "src": "33:982:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.4+commit.c7e474f2.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.4.4",
  "updatedAt": "2022-01-22T00:10:14.968Z",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}