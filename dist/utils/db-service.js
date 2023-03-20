"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbService = void 0;
const joi_1 = __importDefault(require("joi"));
const contracts_1 = require("./contracts");
const networks_1 = require("./networks");
const networks_2 = require("./networks");
const CHAINS = Object.keys(networks_2.chains);
const BSC_VALID_LABELS = [
    ...contracts_1.tokenLabels.filter((el) => el !== contracts_1.labels.bnb),
    contracts_1.labels.BMCManagement,
    contracts_1.labels.BMCPeriphery,
    contracts_1.labels.BTSCore,
    contracts_1.labels.BTSPeriphery
];
const ICON_VALID_LABELS = [
    ...contracts_1.tokenLabels.filter((el) => el !== contracts_1.labels.icx),
    contracts_1.labels.bmc,
    contracts_1.labels.bts
];
const _configSchema = joi_1.default.object({
    network: joi_1.default.object()
        .pattern(joi_1.default.any().valid(...CHAINS), joi_1.default.object({
        network_id: joi_1.default.string().required(),
        btp_network_id: joi_1.default.string().required(),
        block_height: joi_1.default.number().required(),
        provider: joi_1.default.object({
            hostname: joi_1.default.string()
                .pattern(/^((https|http):\/\/)?(([a-zA-Z0-9-]{1,}\.){1,}([a-zA-Z0-9]{1,63}))(:[0-9]{2,5})?(\/.*)?$/)
                .required(),
            nid: joi_1.default.number().required()
        })
    }))
        .length(CHAINS.length),
    contract: joi_1.default.object({
        bsc: joi_1.default.object()
            .pattern(joi_1.default.any().valid(...BSC_VALID_LABELS), joi_1.default.object({
            address: joi_1.default.string()
                .pattern(/0x([a-fA-F0-9]{40})/)
                .required(),
            implementation: joi_1.default.object({
                address: joi_1.default.string()
                    .pattern(/0x([a-fA-F0-9]{40})/)
                    .allow(null)
            })
        }))
            .length(BSC_VALID_LABELS.length),
        icon: joi_1.default.object()
            .pattern(joi_1.default.any().valid(...ICON_VALID_LABELS), joi_1.default.object({
            address: joi_1.default.string()
                .pattern(/cx([a-fA-F0-9]{40})/)
                .required()
        }))
            .length(ICON_VALID_LABELS.length)
    }).required()
});
function _validateConfigData(data) {
    const { error } = _configSchema.validate(data);
    if (error) {
        throw new Error(`Invalid external config data. Error: \n${error.details
            .map((el) => el.message)
            .join("\n")}`);
    }
}
function _dbService() {
    const abiData = require("../../data/abiData.js");
    return {
        read() {
            return abiData;
        },
        write(network, data) {
            _validateConfigData(data);
            Object.entries(data.contract).forEach(([chain, chainData]) => {
                Object.entries(chainData).forEach(([label, labelData]) => {
                    abiData[chain][network][label].address = labelData.address;
                    if (labelData.implementation) {
                        abiData[chain][network][label].implementation.address = labelData.implementation.address;
                    }
                });
            });
            Object.entries(data.network).forEach(([chain, chainData]) => {
                networks_1.networks[network][chain] = Object.assign(Object.assign({}, networks_1.networks[network][chain]), chainData);
            });
        }
    };
}
exports.dbService = _dbService();
//# sourceMappingURL=db-service.js.map