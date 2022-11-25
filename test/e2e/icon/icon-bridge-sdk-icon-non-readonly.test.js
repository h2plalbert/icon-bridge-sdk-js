// E2E Tests.
require("dotenv").config();
const IconBridgeSDK = require("../../../dist/icon-bridge-sdk-node");
const assert = require("assert");

// Icon Bridge SDK
const sdk = new IconBridgeSDK({
  useMainnet: false
});

// test wallets
const wallets = {
  icon: {
    pubK: process.env.WALLET_ICON_ADDRESS,
    privK: process.env.WALLET_ICON_PK
  },
  bsc: {
    pubK: process.env.WALLET_BSC_ADDRESS,
    privK: process.env.WALLET_BSC_PK
  }
};

// Keys that should appear in any response from a readonly call
// originating from the ICON chain.
const genericResultKeys = ["id", "jsonrpc", "result"];

// ********************************************//
// Test 1: calls 'transferNativeCoin' method originating on the Icon chain.
// It should returns and object with a predefined set of keys.
describe("E2E testing Icon Bridge SDK. Chain: 'icon', Method 'transferNativeCoin(targetAddress, targetChain, from, pk, amount)'", () => {
  it("Returns tx hash of the transfer of native coin from ICON chain to BSC chain.", async () => {
    const query = await sdk.icon.methods.transferNativeCoin(
      wallets.bsc.pubK,
      "bsc",
      wallets.icon.pubK,
      wallets.icon.privK,
      "50"
    );
    // check if the result query has the valid keys
    const result = Object.keys(query).map(key => {
      if (genericResultKeys.includes(key)) {
        return true;
      }
      return false;
    });

    console.log(`\n  > Result: ${JSON.stringify(query)}\n`);
    assert.ok(!result.includes(false));
  }).timeout(5000);
});

// ********************************************//
// Test 2: calls 'transferNativeToken' method originating on the Icon chain.
// It should returns and object with a predefined set of keys.
describe("E2E testing Icon Bridge SDK. Chain: 'icon', Method 'transferNativeToken(tokenName, amount, targetAddress, targetChain, TokenContract, from, pk, amount)'", () => {
  it("Returns tx hash of the transfer of a native token from the ICON chain to the BSC chain.", async () => {
    const query = await sdk.icon.methods.transferNativeToken(
      "btp-0x2.icon-bnUSD",
      "50",
      wallets.bsc.pubK,
      "bsc",
      "cxcadcaf77d8e46089fd3d98fcf71eabee1700f148",
      wallets.icon.pubK,
      wallets.icon.privK
    );
    // check if the result query has the valid keys
    const result = Object.keys(query).map(key => {
      if (genericResultKeys.includes(key)) {
        return true;
      }
      return false;
    });

    console.log(`\n  > Result: ${JSON.stringify(query)}\n`);
    assert.ok(!result.includes(false));
  }).timeout(10000);
});

// ********************************************//
// Test 3: calls 'transferWrappedToken' method originating on the Icon chain.
// It should returns and object with a predefined set of keys.
describe("E2E testing Icon Bridge SDK. Chain: 'icon', Method 'transferWrappedToken(tokenName, amount, targetAddress, targetChain, TokenContract, from, pk)'", () => {
  it("Returns tx hash of the transfer of a wrapped token from the ICON chain to the BSC chain.", async () => {
    const query = await sdk.icon.methods.transferWrappedToken(
      "btp-0x61.bsc-BNB",
      "0.1",
      wallets.bsc.pubK,
      "bsc",
      "cx55b835590d43af7bf6f5be3c3d50982264d24e5d",
      wallets.icon.pubK,
      wallets.icon.privK
    );
    // check if the result query has the valid keys
    const result = Object.keys(query).map(key => {
      if (genericResultKeys.includes(key)) {
        return true;
      }
      return false;
    });

    console.log(`\n  > Result: ${JSON.stringify(query)}\n`);
    assert.ok(!result.includes(false));
  }).timeout(10000);
});
