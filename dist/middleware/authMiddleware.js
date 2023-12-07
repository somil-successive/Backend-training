"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_errors_1 = __importDefault(require("http-errors"));
const config_1 = require("../utils/config");
const authMiddleware = (req, res, next) => {
    var _a;
    const token = req.headers.authorization;
    if (!token) {
        next((0, http_errors_1.default)(403, "Unauthorized - Token not provided."));
    }
    try {
        jsonwebtoken_1.default.verify(token !== null && token !== void 0 ? token : "", (_a = config_1.configurations.secretKey) !== null && _a !== void 0 ? _a : "", (err) => {
            if (err) {
                next((0, http_errors_1.default)(401, "Unauthorized -Invalid token"));
            }
        });
        next();
    }
    catch (error) {
        next((0, http_errors_1.default)(401, "Unauthorized -Invalid token"));
    }
};
exports.authMiddleware = authMiddleware;
