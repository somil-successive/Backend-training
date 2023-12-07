"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
class CustomHeaderMiddleware {
    constructor(customHeader) {
        this.customHeaderMiddleware = (req, res, next) => {
            if (Object.keys(this.customHeader).length === 0) {
                return next((0, http_errors_1.default)(411, "No Headers Added"));
            }
            res.set(this.customHeader);
            next();
        };
        this.customHeader = customHeader;
    }
}
exports.default = CustomHeaderMiddleware;
