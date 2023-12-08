"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
class LimitingReqMiddleware {
    constructor() {
        this.limitingReqMiddleware = (req, res, next) => {
            let count = 0;
            let limit = 5;
            let currReqTime, initialReqTime = 0;
            if (count === 0) {
                initialReqTime = new Date().getSeconds();
                currReqTime = new Date().getSeconds();
            }
            else {
                currReqTime = new Date().getSeconds();
                if (currReqTime < initialReqTime)
                    currReqTime += 59;
            }
            if (count < limit && currReqTime <= initialReqTime + 5) {
                count++;
                next();
            }
            else if (currReqTime > initialReqTime + 5) {
                count = 0;
                next();
            }
            else {
                next((0, http_errors_1.default)(429, "Limit Exceeds"));
            }
        };
    }
}
exports.default = new LimitingReqMiddleware().limitingReqMiddleware;
