"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../utils/config");
const http_errors_1 = __importDefault(require("http-errors"));
class GeoLocationMiddleware {
    constructor() {
        this.key = config_1.configurations.key;
        this.ip = config_1.configurations.ip;
        this.geoLocMiddleware = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(`http://api.ipstack.com/${this.ip}?access_key=${this.key}`);
            const data = response.data;
            const { country_code } = data;
            const region = country_code;
            if (region !== "IN") {
                next((0, http_errors_1.default)(401, "Unauthorised User"));
            }
            next();
        });
    }
}
exports.default = new GeoLocationMiddleware().geoLocMiddleware;
