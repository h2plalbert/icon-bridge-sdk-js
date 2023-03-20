const IconBridgeSDK = require("./lib/icon-bridge-sdk");
const bscNodeBridge = require("./lib/bsc/icon-bridge-sdk-node-bsc");
const iconNodeBridge = require("./lib/icon/icon-bridge-sdk-node-icon");
const EspaniconSDK = require("@espanicon/espanicon-sdk");

// types
type Provider = {
  hostname: string;
  nid?: null | number;
};

type Config = {
  network: Record<
    string,
    {
      network_id: string;
      btp_network_id: string;
      block_height: number;
      provider: {
        hostname: string;
        nid: number;
      };
    }
  >;
  contract: {
    bsc: Record<
      string,
      {
        address: string;
        implementation: {
          address: string | null;
        };
      }
    >;
    icon: Record<
      string,
      {
        address: string;
      }
    >;
  };
};

type InputParams = {
  useMainnet: null | boolean;
  iconProvider?: Provider;
  bscProvider?: Provider;
  config?: Config;
};

// variables
const defaultParams = {
  useMainnet: true
};

// code logic
class IconBridgeSDKNode extends IconBridgeSDK {
  bsc: any;
  icon: any;

  constructor(inputParams: InputParams = defaultParams) {
    super(inputParams);

    this.icon = new iconNodeBridge(this.params, this.sdkUtils, EspaniconSDK);

    this.bsc = new bscNodeBridge(
      this.params,
      this.bscWeb3,
      this.sdkUtils,
      this.lib,
      this.icon.queryMethod
    );
  }
}
export = IconBridgeSDKNode;
