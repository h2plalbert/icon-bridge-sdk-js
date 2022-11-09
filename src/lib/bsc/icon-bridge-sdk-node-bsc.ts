// icon-bridge-sdk-node-bsc.ts
//
const baseBSCSDK = require("./icon-bridge-sdk-bsc");
const Exception = require("../../utils/exception");

// types
type Provider = {
  hostname: string;
  nid: null | number;
};

type InputParams = {
  useMainnet: null | boolean;
  iconProvider?: Provider;
  bscProvider?: Provider;
};

// main code

/**
 * Class that provides the API for interacting with the ICON Bridge
 */
class IconBridgeSDKNodeBSC extends baseBSCSDK {
  params: any;
  bscWeb3: any;
  sdkUtils: any;
  callbackLib: any;
  methods: any;

  /**
   * Constructor
   */
  constructor(
    params: InputParams,
    bscWeb3: any,
    sdkUtils: any,
    callbackLib: any
  ) {
    super(params, bscWeb3, sdkUtils, callbackLib);
    this.params = params;
    this.bscWeb3 = bscWeb3;
    this.sdkUtils = sdkUtils;
    this.callbackLib = callbackLib;
    this.methods = {
      ...this.superMethods,
      ...this.localMethods
    };
  }

  private localMethods = {
    /**
     * Add another Owner. Caller must be an Owner of BTP network.
     * @param _owner - Address of new owner
     * @return
     */
    addOwner: async (_owner: string): Promise<any> => {
      // method on index 3
      console.log(_owner);
    },

    /**
     * TODO: no info provided on this function in the BSC smart contract code.
     * https://testnet.bscscan.com/address/0xe020d4ad483c7ec90a24d9db502e66564ef9c236#code
     */
    initialize: async (
      _nativeCoinName: string,
      _feeNumerator: number,
      _fixedFee: number
    ): Promise<void> => {
      // index 13
      console.log([_nativeCoinName, _feeNumerator, _fixedFee]);
    },

    /**
     * Reclaim the token's refundable balance by an owner. Caller must be
     * owner of coin.
     * @param _coinName - coin name.
     * @param _value - amount of re-claiming tokens.
     */
    reclaim: async (_coinName: string, _value: number): Promise<void> => {
      // index 17
      console.log(_coinName, _value);
    },

    /**
     * Registers a wrapped coin and id number of a supporting coin. Caller
     * must be an owner of this contract.
     * @param _name - must be different with the native coin name.
     * @param _symbol - symbol name for a wrapped coin.
     * @param _decimals - decimal number.
     * @param _feeNumerator -
     * @param _fixedFee -
     * @param _addr -
     */
    register: async (
      _name: string,
      _symbol: string,
      _decimals: number,
      _feeNumerator: number,
      _fixedFee: number,
      _addr: string
    ): Promise<void> => {
      // index 19
      console.log([_name, _symbol, _decimals, _feeNumerator, _fixedFee, _addr]);
    },

    /**
     * Removing an existing owner. Caller must be an owner of BTP network.
     * @param _owner - address of owner to be removed.
     */
    removeOwner: async (_owner: string): Promise<void> => {
      // index 20
      console.log(_owner);
    },

    /**
     * Set fee ratio. Caller must be an owner of this contract.
     * @param _name -
     * @param _feeNumerator -
     * @param _fixedFee -
     */
    setFeeRatio: async (
      _name: string,
      _feeNumerator: number,
      _fixedFee: number
    ): Promise<void> => {
      // index 21
      console.log([_name, _feeNumerator, _fixedFee]);
    },

    /**
     * Allow users to deposit an amount of BUSD token into the
     * BTSCore contract.
     * @param targetAddress - address of receiver.
     * @param targetChain - receiver chain.
     * @param from - address of sender.
     * @param pk - private key of sender.
     * @param _coinName - given name of wrapped coin.
     * @param _value - amount to transfer.
     * @param gas - transfer fee amount.
     */
    transferBUSD: async (
      targetAddress: string,
      targetChain: string = "icon",
      from: string,
      pk: string,
      _coinName: string,
      _value: string,
      gas: number | null = 2000000
    ): Promise<any> => {
      //
      const foo = [
        targetAddress,
        targetChain,
        from,
        pk,
        _coinName,
        _value,
        gas
      ];
      console.log(foo);
    },

    /**
     * Allow users to deposit an amount of USDT token into the
     * BTSCore contract.
     * @param targetAddress - address of receiver.
     * @param targetChain - receiver chain.
     * @param from - address of sender.
     * @param pk - private key of sender.
     * @param _coinName - given name of wrapped coin.
     * @param _value - amount to transfer.
     * @param gas - transfer fee amount.
     */
    transferUSDT: async (
      targetAddress: string,
      targetChain: string = "icon",
      from: string,
      pk: string,
      _coinName: string,
      _value: string,
      gas: number | null = 2000000
    ): Promise<any> => {
      //
      const foo = [
        targetAddress,
        targetChain,
        from,
        pk,
        _coinName,
        _value,
        gas
      ];
      console.log(foo);
    },

    /**
     * Allow users to deposit an amount of USDC token into the
     * BTSCore contract.
     * @param targetAddress - address of receiver.
     * @param targetChain - receiver chain.
     * @param from - address of sender.
     * @param pk - private key of sender.
     * @param _coinName - given name of wrapped coin.
     * @param _value - amount to transfer.
     * @param gas - transfer fee amount.
     */
    transferUSDC: async (
      targetAddress: string,
      targetChain: string = "icon",
      from: string,
      pk: string,
      _coinName: string,
      _value: string,
      gas: number | null = 2000000
    ): Promise<any> => {
      //
      const foo = [
        targetAddress,
        targetChain,
        from,
        pk,
        _coinName,
        _value,
        gas
      ];
      console.log(foo);
    },

    /**
     * Allow users to deposit an amount of BTCB token into the
     * BTSCore contract.
     * @param targetAddress - address of receiver.
     * @param targetChain - receiver chain.
     * @param from - address of sender.
     * @param pk - private key of sender.
     * @param _coinName - given name of wrapped coin.
     * @param _value - amount to transfer.
     * @param gas - transfer fee amount.
     */
    transferBTCB: async (
      targetAddress: string,
      targetChain: string = "icon",
      from: string,
      pk: string,
      _coinName: string,
      _value: string,
      gas: number | null = 2000000
    ): Promise<any> => {
      //
      const foo = [
        targetAddress,
        targetChain,
        from,
        pk,
        _coinName,
        _value,
        gas
      ];
      console.log(foo);
    },

    /**
     * Allow users to deposit an amount of ETH token into the
     * BTSCore contract.
     * @param targetAddress - address of receiver.
     * @param targetChain - receiver chain.
     * @param from - address of sender.
     * @param pk - private key of sender.
     * @param _coinName - given name of wrapped coin.
     * @param _value - amount to transfer.
     * @param gas - transfer fee amount.
     */
    transferETH: async (
      targetAddress: string,
      targetChain: string = "icon",
      from: string,
      pk: string,
      _coinName: string,
      _value: string,
      gas: number | null = 2000000
    ): Promise<any> => {
      //
      const foo = [
        targetAddress,
        targetChain,
        from,
        pk,
        _coinName,
        _value,
        gas
      ];
      console.log(foo);
    },

    /**
     * Allow users to deposit an amount of ICX token into the
     * BTSCore contract.
     * @param targetAddress - address of receiver.
     * @param targetChain - receiver chain.
     * @param from - address of sender.
     * @param pk - private key of sender.
     * @param _coinName - given name of wrapped coin.
     * @param _value - amount to transfer.
     * @param gas - transfer fee amount.
     */
    transferICX: async (
      targetAddress: string,
      targetChain: string = "icon",
      from: string,
      pk: string,
      _coinName: string,
      _value: string,
      gas: number | null = 2000000
    ): Promise<any> => {
      //
      const foo = [
        targetAddress,
        targetChain,
        from,
        pk,
        _coinName,
        _value,
        gas
      ];
      console.log(foo);
    },

    /**
     * Allow users to deposit an amount of sICX token into the
     * BTSCore contract.
     * @param targetAddress - address of receiver.
     * @param targetChain - receiver chain.
     * @param from - address of sender.
     * @param pk - private key of sender.
     * @param _coinName - given name of wrapped coin.
     * @param _value - amount to transfer.
     * @param gas - transfer fee amount.
     */
    transferSICX: async (
      targetAddress: string,
      targetChain: string = "icon",
      from: string,
      pk: string,
      _coinName: string,
      _value: string,
      gas: number | null = 2000000
    ): Promise<any> => {
      //
      const foo = [
        targetAddress,
        targetChain,
        from,
        pk,
        _coinName,
        _value,
        gas
      ];
      console.log(foo);
    },

    /**
     * Allow users to deposit an amount of bnUSD token into the
     * BTSCore contract.
     * @param targetAddress - address of receiver.
     * @param targetChain - receiver chain.
     * @param from - address of sender.
     * @param pk - private key of sender.
     * @param _coinName - given name of wrapped coin.
     * @param _value - amount to transfer.
     * @param gas - transfer fee amount.
     */
    transferbnUSD: async (
      targetAddress: string,
      targetChain: string = "icon",
      from: string,
      pk: string,
      _coinName: string,
      _value: string,
      gas: number | null = 2000000
    ): Promise<any> => {
      //
      const foo = [
        targetAddress,
        targetChain,
        from,
        pk,
        _coinName,
        _value,
        gas
      ];
      console.log(foo);
    },

    /**
     * Allow users to deposit an amount of wrapped native coin into the
     * BTSCore contract.
     * BTSCore contract.
     * @param targetAddress - address of receiver.
     * @param targetChain - receiver chain.
     * @param from - address of sender.
     * @param pk - private key of sender.
     * @param _coinName - given name of wrapped coin.
     * @param _value - amount to transfer.
     * @param tokenContractAddress - contract address of the token to be sent.
     * @param tokenContractAbi - contract abi of the token to be sent.
     * @param gas - transfer fee amount.
     */
    transfer: async (
      targetAddress: string,
      targetChain: string = "icon",
      from: string,
      pk: string,
      _coinName: string,
      _value: string,
      tokenContractAddress: string,
      tokenContractAbi: any[],
      gas: number | null = 2000000
    ): Promise<any> => {
      const foo = [tokenContractAddress, tokenContractAbi];
      console.log(foo);
      try {
        const isMainnet: boolean | null =
          this.params.useMainnet == null ? true : this.params.useMainnet;

        // first approve the contract to make transfer
        // const response = await this.approveBTSCoreForTransfer(
        //   from,
        //   pk,
        //   _value,
        //   tokenContractAddress,
        //   tokenContractAbi,
        //   gas
        // );

        const btpAddress = this.sdkUtils.getBTPAddress(
          targetAddress,
          targetChain,
          isMainnet
        );

        const valueInWei = this.bscWeb3.utils.toWei(_value, "ether");

        return await this.signBTSCoreTx(
          from,
          pk,
          "transfer",
          null,
          gas,
          _coinName,
          valueInWei,
          btpAddress
        );
      } catch (err) {
        const errorResult = new Exception(
          err,
          `Error running transfer(). Params:\ntargetAddress: ${targetAddress}\ntargetChain: ${targetChain}\nfrom: ${from}\npk: ${pk}\n_coinName: ${_coinName}\n_value: ${_value}\n`
        );
        return { error: errorResult.toString() };
      }
    },

    /**
     * Allow users to transfer multiple coins/wrapped coins to another chain.
     * @param _coinNames - list of coins.
     * @param _values - list of values in same order of coins.
     * @param _to - target BTP address.
     */
    transferBatch: async (
      _coinNames: string[],
      _values: string[],
      _to: string
    ): Promise<void> => {
      // index 23
      console.log([_coinNames, _values, _to]);
    },

    /**
     * Allows user to deposit native coin into a BTSCore contract.
     * @param targetAddress - address that receives transfer.
     * @param targetChain - chain that receives transfer.
     * @param from - public address of origin.
     * @param pk - private key of origin.
     * @param amount - amount of native coin to send.
     * @param gas - transfer fee amount.
     */
    transferNativeCoin: async (
      targetAddress: string,
      targetChain: string = "icon",
      from: string,
      pk: string,
      amount: string,
      gas: number | null = 2000000
    ): Promise<any> => {
      try {
        const isMainnet: boolean | null =
          this.params.useMainnet == null ? true : this.params.useMainnet;

        const btpAddress = this.sdkUtils.getBTPAddress(
          targetAddress,
          targetChain,
          isMainnet
        );
        return await this.signBTSCoreTx(
          from,
          pk,
          "transferNativeCoin",
          amount,
          gas,
          btpAddress
        );
      } catch (err) {
        const errorResult = new Exception(
          err,
          `Error running transferNativeCoin(). Params:\ntargetAddress: ${targetAddress}\ntargetChain: ${targetChain}\nfrom: ${from}\npk: ${pk}\namount: ${amount}\ngas: ${gas}\n`
        );
        return { error: errorResult.toString() };
      }
    },

    /**
     * Updates BTS periphery address. Caller must be owner of contract.
     * @param _btsPeriphery - btsPeriphery contract address.
     */
    updateBTSPeriphery: async (_btsPeriphery: string): Promise<void> => {
      // index 26
      console.log(_btsPeriphery);
    }
    ///////////////////////////////////////////////////////////////////
    //
    // The following methods can only be called by BTSCore and/or
    // BTSPeriphery contracts

    /**
     * Handle request of fee gathering. Caller must be an
     * BTSPeriphery contract.
     * @param _fa -
     */
    // transferFees: async (_fa: string): Promise<void> => {
    //   // index 24
    //   console.log(_fa);
    // },

    /**
     * For information on this specific method check the solidity smart
     * contract code on the following link:
     * https://testnet.bscscan.com/address/0xe020d4ad483c7ec90a24d9db502e66564e    f9c236#code#F1#L653
     * @param _to -
     * @param _coinName -
     * @param _value -
     */
    // refund: async (
    //   _to: string,
    //   _coinName: string,
    //   _value: number
    // ): Promise<any> => {
    //   // index 18
    //   console.log([_to, _coinName, _value]);
    // }

    /**
     * Handle request of fee gathering. Caller must be an
     * BTSPeriphery contract.
     * @param _fa -
     */
    // transferFees: async (_fa: string): Promise<any> => {
    //   // index 24
    //   console.log(_fa);
    // }
  };

  //private approveBTSCoreForTransfer = async (
  //  from: string,
  //  pk: string,
  //  amount: string,
  //  tokenContractAddress: string,
  //  tokenContractAbi: any[],
  //  gas: number | null = null
  //) => {
  //  //
  //  const isMainnet: boolean | null =
  //    this.params.useMainnet == null ? true : this.params.useMainnet;

  //  const btsCoreAddress = this.callbackLib.getBTSCoreProxyContractAddress(
  //    "bsc",
  //    isMainnet
  //  );

  //  return await this.callbackLib.approveTransfer(
  //    from,
  //    pk,
  //    btsCoreAddress,
  //    amount,
  //    tokenContractAddress,
  //    tokenContractAbi,
  //    "bsc",
  //    this.bscWeb3,
  //    gas
  //  );
  //};

  private signBTSCoreTx = async (
    from: string,
    pk: string,
    methodName: string,
    amount: null | string = null,
    gas: number | null = null,
    ...rest: any[]
  ): Promise<string | null> => {
    if (rest.length === 0) {
      return await this.callbackLib.signBTSCoreTx(
        from,
        pk,
        methodName,
        amount,
        "bsc",
        this.bscWeb3,
        gas
      );
    } else {
      return await this.callbackLib.signBTSCoreTx(
        from,
        pk,
        methodName,
        amount,
        "bsc",
        this.bscWeb3,
        gas,
        ...rest
      );
    }
  };
}

export = IconBridgeSDKNodeBSC;