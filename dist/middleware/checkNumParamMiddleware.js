"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
class CheckNumParamMiddleware {
    constructor() {
        this.checkNumParamMiddleware = (req, res, next) => {
            try {
                const { id } = req.query;
                if (!Number(id)) {
                    next((0, http_errors_1.default)(406, "id is not a number"));
                }
                next();
            }
            catch (err) {
                next(err);
            }
        };
    }
}
exports.default = CheckNumParamMiddleware;