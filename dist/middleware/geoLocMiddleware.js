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
exports.geoLocMiddleware = void 0;
const axios_1 = __importDefault(require("axios"));
const http_errors_1 = __importDefault(require("http-errors"));
const geoLocMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const key = "29f6aafef213de059431ac964c670b6d";
    const ip = "49.249.117.102";
    const response = yield axios_1.default.get(`http://api.ipstack.com/${ip}?access_key=${key}`);
    const data = response.data;
    const { country_code } = data;
    const region = country_code;
    if (region !== "IN") {
        next((0, http_errors_1.default)(401, "Unauthorised User"));
    }
    next();
});
exports.geoLocMiddleware = geoLocMiddleware;
