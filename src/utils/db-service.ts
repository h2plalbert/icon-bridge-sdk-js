import Joi from "joi";
import { tokenLabels, labels } from "./contracts";
import { networks } from "./networks";
import { chains } from "./networks";

const CHAINS = Object.keys(chains);
const BSC_VALID_LABELS = [
  ...tokenLabels.filter((el) => el !== labels.bnb),
  labels.BMCManagement,
  labels.BMCPeriphery,
  labels.BTSCore,
  labels.BTSPeriphery
];
const ICON_VALID_LABELS = [
  ...tokenLabels.filter((el) => el !== labels.icx),
  labels.bmc,
  labels.bts
];

type BscContract = {
  address: string;
  implementation: {
    address: string | null;
  };
};

type IconContract = {
  address: string;
};

type Contract = {
  bsc: Record<string, BscContract>;
  icon: Record<string, IconContract>;
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
  contract: Contract;
};

const _configSchema = Joi.object({
  network: Joi.object()
    .pattern(
      Joi.any().valid(...CHAINS),
      Joi.object({
        network_id: Joi.string().required(),
        btp_network_id: Joi.string().required(),
        block_height: Joi.number().required(),
        provider: Joi.object({
          hostname: Joi.string()
            .pattern(
              /^((https|http):\/\/)?(([a-zA-Z0-9-]{1,}\.){1,}([a-zA-Z0-9]{1,63}))(:[0-9]{2,5})?(\/.*)?$/
            )
            .required(),
          nid: Joi.number().required()
        })
      })
    )
    .length(CHAINS.length),
  contract: Joi.object({
    bsc: Joi.object()
      .pattern(
        Joi.any().valid(...BSC_VALID_LABELS),
        Joi.object({
          address: Joi.string()
            .pattern(/0x([a-fA-F0-9]{40})/)
            .required(),
          implementation: Joi.object({
            address: Joi.string()
              .pattern(/0x([a-fA-F0-9]{40})/)
              .allow(null)
          })
        })
      )
      .length(BSC_VALID_LABELS.length),
    icon: Joi.object()
      .pattern(
        Joi.any().valid(...ICON_VALID_LABELS),
        Joi.object({
          address: Joi.string()
            .pattern(/cx([a-fA-F0-9]{40})/)
            .required()
        })
      )
      .length(ICON_VALID_LABELS.length)
  }).required()
});

function _validateConfigData(data: unknown) {
  const { error } = _configSchema.validate(data);
  if (error) {
    throw new Error(
      `Invalid external config data. Error: \n${error.details
        .map((el) => el.message)
        .join("\n")}`
    );
  }
}

function _dbService() {
  const abiData = require("../../data/abiData.js");
  return {
    read() {
      return abiData;
    },
    write(network: "mainnet" | "testnet", data: Config) {
      _validateConfigData(data);

      // override contract data
      Object.entries(data.contract).forEach(([chain, chainData]) => {
        Object.entries(chainData).forEach(([label, labelData]) => {
          abiData[chain][network][label].address = labelData.address;
          if ((labelData as BscContract).implementation) {
            abiData[chain][network][label].implementation.address = (
              labelData as BscContract
            ).implementation.address;
          }
        });
      });

      // override network data
      Object.entries(data.network).forEach(([chain, chainData]) => {
        networks[network][chain] = {
          ...networks[network][chain],
          ...chainData
        };
      });
    }
  };
}

export const dbService = _dbService();
