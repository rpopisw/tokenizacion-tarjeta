"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommerceService = void 0;
require('dotenv').config();
const axios_1 = __importDefault(require("axios"));
class CommerceService {
    async getCommerceByPk(pk) {
        const url = process.env.URL_API_COMMERCE;
        const commerce = await axios_1.default.post(url, { pk: pk });
        return commerce.data.data;
    }
}
exports.CommerceService = CommerceService;
//# sourceMappingURL=commerce-service.js.map