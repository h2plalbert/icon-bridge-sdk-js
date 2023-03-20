const assert = require("assert");
const { labels } = require("../../dist/utils/contracts");
const { dbService } = require("../../dist/utils/db-service");
const { networks, chains } = require("../../dist/utils/networks");

describe("dbService", () => {
  const mockData = {
    network: {
      bsc: {
        network_id: "0x61",
        btp_network_id: "0x61.bsc",
        block_height: 19,
        provider: { hostname: "http://127.0.0.1:8545", nid: 97 }
      },
      icon: {
        network_id: "0x1c55fa",
        btp_network_id: "0x1c55fa.icon",
        block_height: 399,
        provider: {
          hostname: "http://127.0.0.1:9080/api/v3/icon",
          nid: 1857018
        }
      }
    },
    contract: {
      bsc: {
        BUSD: {
          address: "0x30802E869941C6347a904Ca034840A30B1d728ba",
          implementation: { address: null }
        },
        USDT: {
          address: "0x630192Adcc122A35F0615458E6661DD69c243b53",
          implementation: { address: null }
        },
        USDC: {
          address: "0x8c2e5FC5d651129Ce7296847DcFaC62c646E4E3D",
          implementation: { address: null }
        },
        BTCB: {
          address: "0x2243178094d19675ab49bdD3c7838800FaF8A1E5",
          implementation: { address: null }
        },
        ETH: {
          address: "0x75c16B4204263F47558351c3F324174890C6F8c4",
          implementation: { address: null }
        },
        ICX: {
          address: "0xef7C774B8AEcd5525dFc6979DC40CCBC3a313826",
          implementation: { address: null }
        },
        sICX: {
          address: "0x4C5C8194736dA1656c294926f1f294F64e959c22",
          implementation: { address: null }
        },
        bnUSD: {
          address: "0x405bEcAfad71e72A319E4A92D05C50ef18dF5093",
          implementation: { address: null }
        },
        BMCManagement: {
          address: "0x3cC15e6fE06Ca92c5E062463472852b68AF526F4",
          implementation: { address: null }
        },
        BMCPeriphery: {
          address: "0xAaFc8EeaEE8d9C8bD3262CCE3D73E56DeE3FB776",
          implementation: { address: null }
        },
        BTSCore: {
          address: "0x3abC8DFF0C95B8982399daCf6ED5bD7b94a40068",
          implementation: {
            address: "0x3abC8DFF0C95B8982399daCf6ED5bD7b94a40068"
          }
        },
        BTSPeriphery: {
          address: "0xBA34F3c6893b12fF4115ACf1b4712C6E2783aD83",
          implementation: {
            address: "0xBA34F3c6893b12fF4115ACf1b4712C6E2783aD83"
          }
        }
      },
      icon: {
        sICX: { address: "cx0af5709db545be25d4b8e5f48c49c13439b075cd" },
        bnUSD: { address: "cxa45277a901bfbd81d7800b2215acf3889add5d7d" },
        BNB: { address: "cx45ca6727bbc507d5f9efd4b9ab58051028ddd9d9" },
        BUSD: { address: "cx2b75b5376699b3033945267f4da6c7e8975c4c7d" },
        USDT: { address: "cxe2b5eba38b93d10eb3d2011ec1f61eb6d5baca37" },
        USDC: { address: "cxcd283f8256c7bf15363b2313b75c73d1c8e07292" },
        BTCB: { address: "cx262267bbcbdbd65181dc70c5b5beb8d7869708c6" },
        ETH: { address: "cx5ff808075f45df284fd686b9bf3725c1f1ac989b" },
        bmc: { address: "cxd6d4b7f5f5f0228d7f9241c413eba92b7830d545" },
        bts: { address: "cxfa3913d6b328c61c638c9c48f0e03ea1141f0d4a" }
      }
    }
  };

  it("should properly read ABI data", () => {
    const abiData = dbService.read();
    assert(abiData);
  });

  it("should properly write contract and network data", () => {
    dbService.write("testnet", mockData);

    const abiData = dbService.read();
    assert.deepEqual(
      abiData.bsc.testnet[labels.BMCManagement].address,
      mockData.contract.bsc.BMCManagement.address
    );
    assert.deepEqual(
      abiData.bsc.testnet[labels.BMCManagement].implementation.address,
      null
    );
    assert.deepEqual(
      abiData.icon.testnet[labels.bmc].address,
      mockData.contract.icon.bmc.address
    );
    assert.deepEqual(networks.testnet, {
      [chains.icon]: {
        uri: "https://lisbon.net.solidwallet.io/api/v3/icon_dex",
        tracker: {
          hostname: "https://lisbon.tracker.solidwallet.io/",
          routes: {}
        },
        ...mockData.network.icon
      },
      [chains.bsc]: {
        uri: "https://data-seed-prebsc-1-s1.binance.org:8545",
        tracker: {
          hostname: "api-testnet.bscscan.com",
          routes: {
            getContractAbi: "/api?module=contract&action=getabi&address="
          }
        },
        ...mockData.network.bsc
      }
    });
  });

  it("should throw error on invalid config data", () => {
    const invalidData = {
      network: {
        testnet: {
          network_id: "xxx",
          btp_network_id: "xxx-0-0-2",
          block_height: "12345",
          provider: {
            hostname: "localhost",
            nid: 12345
          }
        }
      },
      contract: {
        bsc: {
          address: "0x123456789012345678901234567890123456789",
          implementation: {
            address: null
          }
        },
        icon: {
          address: "cx123456789012345678901234567890123456789"
        }
      }
    };

    assert.throws(
      () => dbService.write("testnet", invalidData),
      (err) => {
        assert(err instanceof Error);
        return true;
      }
    );
  });
});
