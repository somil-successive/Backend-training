"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_errors_1 = __importDefault(require("http-errors"));
const config_1 = require("../utils/config");
class AuthMiddlewarwe {
    constructor() {
        this.authMiddleware = (req, res, next) => {
            try {
                const token = req.headers.authorization;
                if (!token) {
                    next((0, http_errors_1.default)(403, "Unauthorized - Token not provided."));
                }
                else {
                    const decodedUser = jsonwebtoken_1.default.verify(token !== null && token !== void 0 ? token : "", config_1.configurations.secretKey);
                    next();
                }
            }
            catch (error) {
                next((0, http_errors_1.default)(401, "Unauthorized -Invalid token"));
            }
        };
    }
}
exports.default = new AuthMiddlewarwe().authMiddleware;
