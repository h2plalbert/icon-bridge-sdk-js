const data = {
  bsc: {
    mainnet: {
      BUSD: {
        abi: [
          {
            inputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
              },
              {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address"
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
              }
            ],
            name: "Approval",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
              },
              {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
              }
            ],
            name: "OwnershipTransferred",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
              },
              {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
              }
            ],
            name: "Transfer",
            type: "event"
          },
          {
            constant: true,
            inputs: [],
            name: "_decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "_name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "_symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" }
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [
              { internalType: "address", name: "account", type: "address" }
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "burn",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
              }
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "getOwner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" }
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "mint",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" }
            ],
            name: "transferOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          }
        ],
        address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
        implementation: { address: null, abi: null }
      },
      genericToken: {
        abi: [
          {
            inputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
              },
              {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address"
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
              }
            ],
            name: "Approval",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
              },
              {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
              }
            ],
            name: "OwnershipTransferred",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
              },
              {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
              }
            ],
            name: "Transfer",
            type: "event"
          },
          {
            constant: true,
            inputs: [],
            name: "_decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "_name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "_symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" }
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [
              { internalType: "address", name: "account", type: "address" }
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "burn",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
              }
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "getOwner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" }
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "mint",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" }
            ],
            name: "transferOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          }
        ],
        address: null,
        implementation: { abi: null, address: null }
      },
      USDT: {
        abi: [
          {
            inputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
              },
              {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address"
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
              }
            ],
            name: "Approval",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
              },
              {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
              }
            ],
            name: "OwnershipTransferred",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
              },
              {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
              }
            ],
            name: "Transfer",
            type: "event"
          },
          {
            constant: true,
            inputs: [],
            name: "_decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "_name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "_symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" }
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [
              { internalType: "address", name: "account", type: "address" }
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "burn",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
              }
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "getOwner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" }
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "mint",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" }
            ],
            name: "transferOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          }
        ],
        address: "0x55d398326f99059fF775485246999027B3197955",
        implementation: { address: null, abi: null }
      },
      USDC: {
        abi: [
          {
            inputs: [
              { internalType: "address", name: "logic", type: "address" },
              { internalType: "address", name: "admin", type: "address" },
              { internalType: "bytes", name: "data", type: "bytes" }
            ],
            stateMutability: "nonpayable",
            type: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address"
              },
              {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address"
              }
            ],
            name: "AdminChanged",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
              }
            ],
            name: "Upgraded",
            type: "event"
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "admin",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              { internalType: "address", name: "newAdmin", type: "address" }
            ],
            name: "changeAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              }
            ],
            name: "upgradeTo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              },
              { internalType: "bytes", name: "data", type: "bytes" }
            ],
            name: "upgradeToAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function"
          },
          { stateMutability: "payable", type: "receive" }
        ],
        address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        implementation: { address: null, abi: null }
      },
      BTCB: {
        abi: [
          {
            inputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
              },
              {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address"
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
              }
            ],
            name: "Approval",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
              },
              {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
              }
            ],
            name: "OwnershipTransferred",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
              },
              {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
              }
            ],
            name: "Transfer",
            type: "event"
          },
          {
            constant: true,
            inputs: [],
            name: "_decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "_name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "_symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" }
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [
              { internalType: "address", name: "account", type: "address" }
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "burn",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
              }
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "getOwner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" }
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "mint",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" }
            ],
            name: "transferOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          }
        ],
        address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
        implementation: { address: null, abi: null }
      },
      ETH: {
        abi: [
          {
            inputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
              },
              {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address"
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
              }
            ],
            name: "Approval",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
              },
              {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
              }
            ],
            name: "OwnershipTransferred",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
              },
              {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
              }
            ],
            name: "Transfer",
            type: "event"
          },
          {
            constant: true,
            inputs: [],
            name: "_decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "_name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "_symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" }
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [
              { internalType: "address", name: "account", type: "address" }
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "burn",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
              }
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "getOwner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" }
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "mint",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: true,
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" }
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" }
            ],
            name: "transferOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
          }
        ],
        address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
        implementation: { address: null, abi: null }
      },
      ICX: {
        abi: null,
        address: "0x9b7b6A964f8870699Ae74744941663D257b0ec1f",
        implementation: { address: null, abi: null }
      },
      sICX: {
        abi: null,
        address: "0x33acDF0Fe57C531095F6bf5a992bF5aA81c94Acf",
        implementation: { address: null, abi: null }
      },
      bnUSD: {
        abi: null,
        address: "0xa804D2e9221057099eF331AE1c0D6616cC27d770",
        implementation: { address: null, abi: null }
      },
      BMCManagement: {
        abi: [
          {
            inputs: [
              { internalType: "address", name: "_logic", type: "address" },
              { internalType: "address", name: "admin_", type: "address" },
              { internalType: "bytes", name: "_data", type: "bytes" }
            ],
            stateMutability: "payable",
            type: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address"
              },
              {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address"
              }
            ],
            name: "AdminChanged",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address"
              }
            ],
            name: "BeaconUpgraded",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
              }
            ],
            name: "Upgraded",
            type: "event"
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "admin",
            outputs: [
              { internalType: "address", name: "admin_", type: "address" }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              { internalType: "address", name: "newAdmin", type: "address" }
            ],
            name: "changeAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [
              {
                internalType: "address",
                name: "implementation_",
                type: "address"
              }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              }
            ],
            name: "upgradeTo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              },
              { internalType: "bytes", name: "data", type: "bytes" }
            ],
            name: "upgradeToAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function"
          },
          { stateMutability: "payable", type: "receive" }
        ],
        address: "0xe221e50fbe2Ba54b1898b4c02F66bf9598fbD1dB",
        implementation: { address: null, abi: null }
      },
      BMCPeriphery: {
        abi: [
          {
            inputs: [
              { internalType: "address", name: "_logic", type: "address" },
              { internalType: "address", name: "admin_", type: "address" },
              { internalType: "bytes", name: "_data", type: "bytes" }
            ],
            stateMutability: "payable",
            type: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address"
              },
              {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address"
              }
            ],
            name: "AdminChanged",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address"
              }
            ],
            name: "BeaconUpgraded",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
              }
            ],
            name: "Upgraded",
            type: "event"
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "admin",
            outputs: [
              { internalType: "address", name: "admin_", type: "address" }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              { internalType: "address", name: "newAdmin", type: "address" }
            ],
            name: "changeAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [
              {
                internalType: "address",
                name: "implementation_",
                type: "address"
              }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              }
            ],
            name: "upgradeTo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              },
              { internalType: "bytes", name: "data", type: "bytes" }
            ],
            name: "upgradeToAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function"
          },
          { stateMutability: "payable", type: "receive" }
        ],
        address: "0x034AaDE86BF402F023Aa17E5725fABC4ab9E9798",
        implementation: { address: null, abi: null }
      },
      BTSCore: {
        abi: [
          {
            inputs: [
              { internalType: "address", name: "_logic", type: "address" },
              { internalType: "address", name: "admin_", type: "address" },
              { internalType: "bytes", name: "_data", type: "bytes" }
            ],
            stateMutability: "payable",
            type: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address"
              },
              {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address"
              }
            ],
            name: "AdminChanged",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address"
              }
            ],
            name: "BeaconUpgraded",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
              }
            ],
            name: "Upgraded",
            type: "event"
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "admin",
            outputs: [
              { internalType: "address", name: "admin_", type: "address" }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              { internalType: "address", name: "newAdmin", type: "address" }
            ],
            name: "changeAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [
              {
                internalType: "address",
                name: "implementation_",
                type: "address"
              }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              }
            ],
            name: "upgradeTo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              },
              { internalType: "bytes", name: "data", type: "bytes" }
            ],
            name: "upgradeToAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function"
          },
          { stateMutability: "payable", type: "receive" }
        ],
        address: "0x7A4341Af4995884546Bcf7e09eB98beD3eD26D28",
        implementation: {
          address: "0x8ac0db08f29b528b84ffa04371f585a0e06cf9fc",
          abi: null
        }
      },
      BTSPeriphery: {
        abi: [
          {
            inputs: [
              { internalType: "address", name: "_logic", type: "address" },
              { internalType: "address", name: "admin_", type: "address" },
              { internalType: "bytes", name: "_data", type: "bytes" }
            ],
            stateMutability: "payable",
            type: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address"
              },
              {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address"
              }
            ],
            name: "AdminChanged",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address"
              }
            ],
            name: "BeaconUpgraded",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
              }
            ],
            name: "Upgraded",
            type: "event"
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "admin",
            outputs: [
              { internalType: "address", name: "admin_", type: "address" }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              { internalType: "address", name: "newAdmin", type: "address" }
            ],
            name: "changeAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [
              {
                internalType: "address",
                name: "implementation_",
                type: "address"
              }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              }
            ],
            name: "upgradeTo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              },
              { internalType: "bytes", name: "data", type: "bytes" }
            ],
            name: "upgradeToAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function"
          },
          { stateMutability: "payable", type: "receive" }
        ],
        address: "0x556CA2d717d366A448c118D14e94a744b3c6578c",
        implementation: {
          address: "0x1b13add065c85372fbfbd56beed42ea149a8522d",
          abi: null
        }
      }
    },
    testnet: {
      BUSD: {
        abi: [
          {
            inputs: [
              { internalType: "address", name: "_logic", type: "address" },
              { internalType: "address", name: "admin_", type: "address" },
              { internalType: "bytes", name: "_data", type: "bytes" }
            ],
            stateMutability: "payable",
            type: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address"
              },
              {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address"
              }
            ],
            name: "AdminChanged",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address"
              }
            ],
            name: "BeaconUpgraded",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
              }
            ],
            name: "Upgraded",
            type: "event"
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "admin",
            outputs: [
              { internalType: "address", name: "admin_", type: "address" }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              { internalType: "address", name: "newAdmin", type: "address" }
            ],
            name: "changeAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [
              {
                internalType: "address",
                name: "implementation_",
                type: "address"
              }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              }
            ],
            name: "upgradeTo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              },
              { internalType: "bytes", name: "data", type: "bytes" }
            ],
            name: "upgradeToAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function"
          },
          { stateMutability: "payable", type: "receive" }
        ],
        address: "0x119344c4354AcD401Ffb7Ed58e2B03fBA6759a87",
        implementation: { address: null, abi: null }
      },
      genericToken: {
        abi: [
          {
            inputs: [
              { internalType: "address", name: "_logic", type: "address" },
              { internalType: "address", name: "admin_", type: "address" },
              { internalType: "bytes", name: "_data", type: "bytes" }
            ],
            stateMutability: "payable",
            type: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address"
              },
              {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address"
              }
            ],
            name: "AdminChanged",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address"
              }
            ],
            name: "BeaconUpgraded",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
              }
            ],
            name: "Upgraded",
            type: "event"
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "admin",
            outputs: [
              { internalType: "address", name: "admin_", type: "address" }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              { internalType: "address", name: "newAdmin", type: "address" }
            ],
            name: "changeAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [
              {
                internalType: "address",
                name: "implementation_",
                type: "address"
              }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              }
            ],
            name: "upgradeTo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              },
              { internalType: "bytes", name: "data", type: "bytes" }
            ],
            name: "upgradeToAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function"
          },
          { stateMutability: "payable", type: "receive" }
        ],
        address: null,
        implementation: { abi: null, address: null }
      },
      USDT: {
        abi: [
          {
            inputs: [
              { internalType: "address", name: "_logic", type: "address" },
              { internalType: "address", name: "admin_", type: "address" },
              { internalType: "bytes", name: "_data", type: "bytes" }
            ],
            stateMutability: "payable",
            type: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address"
              },
              {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address"
              }
            ],
            name: "AdminChanged",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address"
              }
            ],
            name: "BeaconUpgraded",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
              }
            ],
            name: "Upgraded",
            type: "event"
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "admin",
            outputs: [
              { internalType: "address", name: "admin_", type: "address" }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              { internalType: "address", name: "newAdmin", type: "address" }
            ],
            name: "changeAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [
              {
                internalType: "address",
                name: "implementation_",
                type: "address"
              }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              }
            ],
            name: "upgradeTo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              },
              { internalType: "bytes", name: "data", type: "bytes" }
            ],
            name: "upgradeToAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function"
          },
          { stateMutability: "payable", type: "receive" }
        ],
        address: "0x51C59A4453e26c1DC46E282cbC6FFDD72ceC16DA",
        implementation: { address: null, abi: null }
      },
      USDC: {
        abi: [
          {
            inputs: [
              { internalType: "address", name: "_logic", type: "address" },
              { internalType: "address", name: "admin_", type: "address" },
              { internalType: "bytes", name: "_data", type: "bytes" }
            ],
            stateMutability: "payable",
            type: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address"
              },
              {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address"
              }
            ],
            name: "AdminChanged",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address"
              }
            ],
            name: "BeaconUpgraded",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
              }
            ],
            name: "Upgraded",
            type: "event"
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "admin",
            outputs: [
              { internalType: "address", name: "admin_", type: "address" }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              { internalType: "address", name: "newAdmin", type: "address" }
            ],
            name: "changeAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [
              {
                internalType: "address",
                name: "implementation_",
                type: "address"
              }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              }
            ],
            name: "upgradeTo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              },
              { internalType: "bytes", name: "data", type: "bytes" }
            ],
            name: "upgradeToAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function"
          },
          { stateMutability: "payable", type: "receive" }
        ],
        address: "0x2f84D2Eeac14e2d02aaf00eB25801721D4233d19",
        implementation: { address: null, abi: null }
      },
      BTCB: {
        abi: [
          {
            inputs: [
              { internalType: "address", name: "_logic", type: "address" },
              { internalType: "address", name: "admin_", type: "address" },
              { internalType: "bytes", name: "_data", type: "bytes" }
            ],
            stateMutability: "payable",
            type: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address"
              },
              {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address"
              }
            ],
            name: "AdminChanged",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address"
              }
            ],
            name: "BeaconUpgraded",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
              }
            ],
            name: "Upgraded",
            type: "event"
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "admin",
            outputs: [
              { internalType: "address", name: "admin_", type: "address" }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              { internalType: "address", name: "newAdmin", type: "address" }
            ],
            name: "changeAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [
              {
                internalType: "address",
                name: "implementation_",
                type: "address"
              }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              }
            ],
            name: "upgradeTo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              },
              { internalType: "bytes", name: "data", type: "bytes" }
            ],
            name: "upgradeToAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function"
          },
          { stateMutability: "payable", type: "receive" }
        ],
        address: "0xd5d707da717cf4771Ed995f16E976C711890F118",
        implementation: { address: null, abi: null }
      },
      ETH: {
        abi: [
          {
            inputs: [
              { internalType: "address", name: "_logic", type: "address" },
              { internalType: "address", name: "admin_", type: "address" },
              { internalType: "bytes", name: "_data", type: "bytes" }
            ],
            stateMutability: "payable",
            type: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address"
              },
              {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address"
              }
            ],
            name: "AdminChanged",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address"
              }
            ],
            name: "BeaconUpgraded",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
              }
            ],
            name: "Upgraded",
            type: "event"
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "admin",
            outputs: [
              { internalType: "address", name: "admin_", type: "address" }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              { internalType: "address", name: "newAdmin", type: "address" }
            ],
            name: "changeAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [
              {
                internalType: "address",
                name: "implementation_",
                type: "address"
              }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              }
            ],
            name: "upgradeTo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              },
              { internalType: "bytes", name: "data", type: "bytes" }
            ],
            name: "upgradeToAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function"
          },
          { stateMutability: "payable", type: "receive" }
        ],
        address: "0xE3471f58314332502Be2B0681a66D674D98763D6",
        implementation: { address: null, abi: null }
      },
      ICX: {
        abi: null,
        address: "0x7d8c52A23FD7e3ca1342797baE7caF6d7b8036BA",
        implementation: { address: null, abi: null }
      },
      sICX: {
        abi: null,
        address: "0x0a7792fe75548b26b287871081Aa6b05f48D9e89",
        implementation: { address: null, abi: null }
      },
      bnUSD: {
        abi: null,
        address: "0xc0c1aA22F99bb6724dC4159C256A5989D90A659C",
        implementation: { address: null, abi: null }
      },
      BMCManagement: {
        abi: [
          {
            inputs: [
              { internalType: "address", name: "_logic", type: "address" },
              { internalType: "address", name: "admin_", type: "address" },
              { internalType: "bytes", name: "_data", type: "bytes" }
            ],
            stateMutability: "payable",
            type: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address"
              },
              {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address"
              }
            ],
            name: "AdminChanged",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address"
              }
            ],
            name: "BeaconUpgraded",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
              }
            ],
            name: "Upgraded",
            type: "event"
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "admin",
            outputs: [
              { internalType: "address", name: "admin_", type: "address" }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              { internalType: "address", name: "newAdmin", type: "address" }
            ],
            name: "changeAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [
              {
                internalType: "address",
                name: "implementation_",
                type: "address"
              }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              }
            ],
            name: "upgradeTo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              },
              { internalType: "bytes", name: "data", type: "bytes" }
            ],
            name: "upgradeToAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function"
          },
          { stateMutability: "payable", type: "receive" }
        ],
        address: "0x5B9733113745F87A790321e2a84e73CbDa628B95",
        implementation: { address: null, abi: null }
      },
      BMCPeriphery: {
        abi: [
          {
            inputs: [
              { internalType: "address", name: "_logic", type: "address" },
              { internalType: "address", name: "admin_", type: "address" },
              { internalType: "bytes", name: "_data", type: "bytes" }
            ],
            stateMutability: "payable",
            type: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address"
              },
              {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address"
              }
            ],
            name: "AdminChanged",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address"
              }
            ],
            name: "BeaconUpgraded",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
              }
            ],
            name: "Upgraded",
            type: "event"
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "admin",
            outputs: [
              { internalType: "address", name: "admin_", type: "address" }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              { internalType: "address", name: "newAdmin", type: "address" }
            ],
            name: "changeAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [
              {
                internalType: "address",
                name: "implementation_",
                type: "address"
              }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              }
            ],
            name: "upgradeTo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              },
              { internalType: "bytes", name: "data", type: "bytes" }
            ],
            name: "upgradeToAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function"
          },
          { stateMutability: "payable", type: "receive" }
        ],
        address: "0x853CceE29C20331DB18937E6bEdb8ab477ebe691",
        implementation: { address: null, abi: null }
      },
      BTSCore: {
        abi: [
          {
            inputs: [
              { internalType: "address", name: "_logic", type: "address" },
              { internalType: "address", name: "admin_", type: "address" },
              { internalType: "bytes", name: "_data", type: "bytes" }
            ],
            stateMutability: "payable",
            type: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address"
              },
              {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address"
              }
            ],
            name: "AdminChanged",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address"
              }
            ],
            name: "BeaconUpgraded",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
              }
            ],
            name: "Upgraded",
            type: "event"
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "admin",
            outputs: [
              { internalType: "address", name: "admin_", type: "address" }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              { internalType: "address", name: "newAdmin", type: "address" }
            ],
            name: "changeAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [
              {
                internalType: "address",
                name: "implementation_",
                type: "address"
              }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              }
            ],
            name: "upgradeTo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              },
              { internalType: "bytes", name: "data", type: "bytes" }
            ],
            name: "upgradeToAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function"
          },
          { stateMutability: "payable", type: "receive" }
        ],
        address: "0x1a2aDf985D6c2700fdAf72A9c1e2b39e3B647F7e",
        implementation: {
          address: "0xe020d4ad483c7ec90a24d9db502e66564ef9c236",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8"
                }
              ],
              name: "Initialized",
              type: "event"
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "remover",
                  type: "address"
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "formerOwner",
                  type: "address"
                }
              ],
              name: "RemoveOwnership",
              type: "event"
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "promoter",
                  type: "address"
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address"
                }
              ],
              name: "SetOwnership",
              type: "event"
            },
            {
              inputs: [
                { internalType: "address", name: "_owner", type: "address" }
              ],
              name: "addOwner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            },
            {
              inputs: [
                { internalType: "address", name: "_owner", type: "address" },
                { internalType: "string", name: "_coinName", type: "string" }
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "_usableBalance",
                  type: "uint256"
                },
                {
                  internalType: "uint256",
                  name: "_lockedBalance",
                  type: "uint256"
                },
                {
                  internalType: "uint256",
                  name: "_refundableBalance",
                  type: "uint256"
                },
                {
                  internalType: "uint256",
                  name: "_userBalance",
                  type: "uint256"
                }
              ],
              stateMutability: "view",
              type: "function"
            },
            {
              inputs: [
                { internalType: "address", name: "_owner", type: "address" },
                {
                  internalType: "string[]",
                  name: "_coinNames",
                  type: "string[]"
                }
              ],
              name: "balanceOfBatch",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "_usableBalances",
                  type: "uint256[]"
                },
                {
                  internalType: "uint256[]",
                  name: "_lockedBalances",
                  type: "uint256[]"
                },
                {
                  internalType: "uint256[]",
                  name: "_refundableBalances",
                  type: "uint256[]"
                },
                {
                  internalType: "uint256[]",
                  name: "_userBalances",
                  type: "uint256[]"
                }
              ],
              stateMutability: "view",
              type: "function"
            },
            {
              inputs: [
                { internalType: "string", name: "_coinName", type: "string" }
              ],
              name: "coinId",
              outputs: [{ internalType: "address", name: "", type: "address" }],
              stateMutability: "view",
              type: "function"
            },
            {
              inputs: [],
              name: "coinNames",
              outputs: [
                { internalType: "string[]", name: "_names", type: "string[]" }
              ],
              stateMutability: "view",
              type: "function"
            },
            {
              inputs: [
                { internalType: "string", name: "_coinName", type: "string" }
              ],
              name: "feeRatio",
              outputs: [
                {
                  internalType: "uint256",
                  name: "_feeNumerator",
                  type: "uint256"
                },
                { internalType: "uint256", name: "_fixedFee", type: "uint256" }
              ],
              stateMutability: "view",
              type: "function"
            },
            {
              inputs: [],
              name: "getAccumulatedFees",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "coinName",
                      type: "string"
                    },
                    { internalType: "uint256", name: "value", type: "uint256" }
                  ],
                  internalType: "struct Types.Asset[]",
                  name: "_accumulatedFees",
                  type: "tuple[]"
                }
              ],
              stateMutability: "view",
              type: "function"
            },
            {
              inputs: [],
              name: "getNativeCoinName",
              outputs: [{ internalType: "string", name: "", type: "string" }],
              stateMutability: "view",
              type: "function"
            },
            {
              inputs: [],
              name: "getOwners",
              outputs: [
                { internalType: "address[]", name: "", type: "address[]" }
              ],
              stateMutability: "view",
              type: "function"
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_requester",
                  type: "address"
                },
                { internalType: "string", name: "_coinName", type: "string" },
                { internalType: "uint256", name: "_value", type: "uint256" },
                { internalType: "uint256", name: "_fee", type: "uint256" },
                { internalType: "uint256", name: "_rspCode", type: "uint256" }
              ],
              name: "handleResponseService",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_nativeCoinName",
                  type: "string"
                },
                {
                  internalType: "uint256",
                  name: "_feeNumerator",
                  type: "uint256"
                },
                { internalType: "uint256", name: "_fixedFee", type: "uint256" }
              ],
              name: "initialize",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            },
            {
              inputs: [
                { internalType: "address", name: "_owner", type: "address" }
              ],
              name: "isOwner",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              stateMutability: "view",
              type: "function"
            },
            {
              inputs: [
                { internalType: "string", name: "_coinName", type: "string" }
              ],
              name: "isValidCoin",
              outputs: [{ internalType: "bool", name: "_valid", type: "bool" }],
              stateMutability: "view",
              type: "function"
            },
            {
              inputs: [
                { internalType: "address", name: "_to", type: "address" },
                { internalType: "string", name: "_coinName", type: "string" },
                { internalType: "uint256", name: "_value", type: "uint256" }
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            },
            {
              inputs: [
                { internalType: "string", name: "_coinName", type: "string" },
                { internalType: "uint256", name: "_value", type: "uint256" }
              ],
              name: "reclaim",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            },
            {
              inputs: [
                { internalType: "address", name: "_to", type: "address" },
                { internalType: "string", name: "_coinName", type: "string" },
                { internalType: "uint256", name: "_value", type: "uint256" }
              ],
              name: "refund",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            },
            {
              inputs: [
                { internalType: "string", name: "_name", type: "string" },
                { internalType: "string", name: "_symbol", type: "string" },
                { internalType: "uint8", name: "_decimals", type: "uint8" },
                {
                  internalType: "uint256",
                  name: "_feeNumerator",
                  type: "uint256"
                },
                { internalType: "uint256", name: "_fixedFee", type: "uint256" },
                { internalType: "address", name: "_addr", type: "address" }
              ],
              name: "register",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            },
            {
              inputs: [
                { internalType: "address", name: "_owner", type: "address" }
              ],
              name: "removeOwner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            },
            {
              inputs: [
                { internalType: "string", name: "_name", type: "string" },
                {
                  internalType: "uint256",
                  name: "_feeNumerator",
                  type: "uint256"
                },
                { internalType: "uint256", name: "_fixedFee", type: "uint256" }
              ],
              name: "setFeeRatio",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            },
            {
              inputs: [
                { internalType: "string", name: "_coinName", type: "string" },
                { internalType: "uint256", name: "_value", type: "uint256" },
                { internalType: "string", name: "_to", type: "string" }
              ],
              name: "transfer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            },
            {
              inputs: [
                {
                  internalType: "string[]",
                  name: "_coinNames",
                  type: "string[]"
                },
                {
                  internalType: "uint256[]",
                  name: "_values",
                  type: "uint256[]"
                },
                { internalType: "string", name: "_to", type: "string" }
              ],
              name: "transferBatch",
              outputs: [],
              stateMutability: "payable",
              type: "function"
            },
            {
              inputs: [{ internalType: "string", name: "_fa", type: "string" }],
              name: "transferFees",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            },
            {
              inputs: [{ internalType: "string", name: "_to", type: "string" }],
              name: "transferNativeCoin",
              outputs: [],
              stateMutability: "payable",
              type: "function"
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_btsPeriphery",
                  type: "address"
                }
              ],
              name: "updateBTSPeriphery",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            }
          ]
        }
      },
      BTSPeriphery: {
        abi: [
          {
            inputs: [
              { internalType: "address", name: "_logic", type: "address" },
              { internalType: "address", name: "admin_", type: "address" },
              { internalType: "bytes", name: "_data", type: "bytes" }
            ],
            stateMutability: "payable",
            type: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address"
              },
              {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address"
              }
            ],
            name: "AdminChanged",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address"
              }
            ],
            name: "BeaconUpgraded",
            type: "event"
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
              }
            ],
            name: "Upgraded",
            type: "event"
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "admin",
            outputs: [
              { internalType: "address", name: "admin_", type: "address" }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              { internalType: "address", name: "newAdmin", type: "address" }
            ],
            name: "changeAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [
              {
                internalType: "address",
                name: "implementation_",
                type: "address"
              }
            ],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              }
            ],
            name: "upgradeTo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address"
              },
              { internalType: "bytes", name: "data", type: "bytes" }
            ],
            name: "upgradeToAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function"
          },
          { stateMutability: "payable", type: "receive" }
        ],
        address: "0x69555E113279b3d3805492a829DD765ED394A669",
        implementation: {
          address: "0x434744287ee59426092e6892963976b1d0e18b89",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8"
                }
              ],
              name: "Initialized",
              type: "event"
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_from",
                  type: "address"
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_sn",
                  type: "uint256"
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_code",
                  type: "uint256"
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "_response",
                  type: "string"
                }
              ],
              name: "TransferEnd",
              type: "event"
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "string",
                  name: "_from",
                  type: "string"
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "_to",
                  type: "address"
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_sn",
                  type: "uint256"
                },
                {
                  components: [
                    {
                      internalType: "string",
                      name: "coinName",
                      type: "string"
                    },
                    { internalType: "uint256", name: "value", type: "uint256" }
                  ],
                  indexed: false,
                  internalType: "struct Types.Asset[]",
                  name: "_assetDetails",
                  type: "tuple[]"
                }
              ],
              name: "TransferReceived",
              type: "event"
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_from",
                  type: "address"
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "_to",
                  type: "string"
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_sn",
                  type: "uint256"
                },
                {
                  components: [
                    {
                      internalType: "string",
                      name: "coinName",
                      type: "string"
                    },
                    { internalType: "uint256", name: "value", type: "uint256" },
                    { internalType: "uint256", name: "fee", type: "uint256" }
                  ],
                  indexed: false,
                  internalType: "struct Types.AssetTransferDetail[]",
                  name: "_assetDetails",
                  type: "tuple[]"
                }
              ],
              name: "TransferStart",
              type: "event"
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "_from",
                  type: "string"
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_sn",
                  type: "uint256"
                }
              ],
              name: "UnknownResponse",
              type: "event"
            },
            {
              inputs: [
                { internalType: "string[]", name: "_address", type: "string[]" }
              ],
              name: "addToBlacklist",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            },
            {
              inputs: [{ internalType: "address", name: "", type: "address" }],
              name: "blacklist",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              stateMutability: "view",
              type: "function"
            },
            {
              inputs: [{ internalType: "string", name: "_to", type: "string" }],
              name: "checkParseAddress",
              outputs: [],
              stateMutability: "pure",
              type: "function"
            },
            {
              inputs: [
                { internalType: "string", name: "_coinName", type: "string" },
                { internalType: "address", name: "_user", type: "address" },
                { internalType: "uint256", name: "_value", type: "uint256" }
              ],
              name: "checkTransferRestrictions",
              outputs: [],
              stateMutability: "view",
              type: "function"
            },
            {
              inputs: [
                { internalType: "string", name: "", type: "string" },
                { internalType: "string", name: "_svc", type: "string" },
                { internalType: "uint256", name: "_sn", type: "uint256" },
                { internalType: "uint256", name: "_code", type: "uint256" },
                { internalType: "string", name: "_msg", type: "string" }
              ],
              name: "handleBTPError",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            },
            {
              inputs: [
                { internalType: "string", name: "_from", type: "string" },
                { internalType: "string", name: "_svc", type: "string" },
                { internalType: "uint256", name: "_sn", type: "uint256" },
                { internalType: "bytes", name: "_msg", type: "bytes" }
              ],
              name: "handleBTPMessage",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            },
            {
              inputs: [
                { internalType: "string", name: "_fa", type: "string" },
                { internalType: "string", name: "_svc", type: "string" }
              ],
              name: "handleFeeGathering",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            },
            {
              inputs: [
                { internalType: "string", name: "_to", type: "string" },
                {
                  components: [
                    {
                      internalType: "string",
                      name: "coinName",
                      type: "string"
                    },
                    { internalType: "uint256", name: "value", type: "uint256" }
                  ],
                  internalType: "struct Types.Asset[]",
                  name: "_assets",
                  type: "tuple[]"
                }
              ],
              name: "handleRequestService",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            },
            {
              inputs: [],
              name: "hasPendingRequest",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              stateMutability: "view",
              type: "function"
            },
            {
              inputs: [
                { internalType: "address", name: "_bmc", type: "address" },
                { internalType: "address", name: "_btsCore", type: "address" }
              ],
              name: "initialize",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            },
            {
              inputs: [
                { internalType: "string[]", name: "_address", type: "string[]" }
              ],
              name: "removeFromBlacklist",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            },
            {
              inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              name: "requests",
              outputs: [
                { internalType: "string", name: "from", type: "string" },
                { internalType: "string", name: "to", type: "string" }
              ],
              stateMutability: "view",
              type: "function"
            },
            {
              inputs: [
                { internalType: "address", name: "_from", type: "address" },
                { internalType: "string", name: "_to", type: "string" },
                {
                  internalType: "string[]",
                  name: "_coinNames",
                  type: "string[]"
                },
                {
                  internalType: "uint256[]",
                  name: "_values",
                  type: "uint256[]"
                },
                { internalType: "uint256[]", name: "_fees", type: "uint256[]" }
              ],
              name: "sendServiceMessage",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            },
            {
              inputs: [],
              name: "serviceName",
              outputs: [{ internalType: "string", name: "", type: "string" }],
              stateMutability: "view",
              type: "function"
            },
            {
              inputs: [
                {
                  internalType: "string[]",
                  name: "_coinNames",
                  type: "string[]"
                },
                {
                  internalType: "uint256[]",
                  name: "_tokenLimits",
                  type: "uint256[]"
                }
              ],
              name: "setTokenLimit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function"
            },
            {
              inputs: [{ internalType: "string", name: "", type: "string" }],
              name: "tokenLimit",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function"
            }
          ]
        }
      }
    }
  },
  icon: {
    mainnet: {
      sICX: { address: "cx2609b924e33ef00b648a409245c7ea394c467824" },
      bnUSD: { address: "cx88fd7df7ddff82f7cc735c871dc519838cb235bb" },
      BNB: { address: "cx077807f2322aeb42ea19a1fcc0c9f3d3f35e1461" },
      BUSD: { address: "cxb49d82c46be6b61cab62aaf9824b597c6cf8a25d" },
      USDT: { address: "cx8e4d9b4164618f796d493a8154f1f17ad75f11bb" },
      USDC: { address: "cx532e4235f9004c233604c1be98ca839cd777d58c" },
      BTCB: { address: "cx5b5a03cb525a1845d0af3a872d525b18a810acb0" },
      ETH: { address: "cx288d13e1b63563459a2ac6179f237711f6851cb5" },
      bmc: { address: "cx23a91ee3dd290486a9113a6a42429825d813de53" },
      bts: { address: "cxcef70e92b89f2d8191a0582de966280358713c32" }
    },
    testnet: {
      sICX: { address: "cxc7b869d97a567044a2a5acea180ecd9071cd20b0" },
      bnUSD: { address: "cxcadcaf77d8e46089fd3d98fcf71eabee1700f148" },
      BNB: { address: "cx55b835590d43af7bf6f5be3c3d50982264d24e5d" },
      BUSD: { address: "cx39a7fefbe48ca7984e036abb1fab16f25fa641bb" },
      USDT: { address: "cxdb7e556a7fd5441bead5d7c5403d414223d51132" },
      USDC: { address: "cxf021731307d9f382935ac4bda81ee03946e1e4bd" },
      BTCB: { address: "cx7c1ef7b631a64e33e35565b81e669a05cdd0d968" },
      ETH: { address: "cx4663c5f1d955207c5718aedb11ff029f08b50036" },
      bmc: { address: "cx053b96e2de3b9e6fc06db7b390d96ebf5fe82892" },
      bts: { address: "cxa843db0a27750230559f997bafaeb7f8739afc81" }
    }
  }
};
module.exports = data;
