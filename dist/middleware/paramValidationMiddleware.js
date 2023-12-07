"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramValidationMiddleware = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const paramValidationMiddleware = (req, res, next) => {
    const { id } = req.params;
    if (!Number(id)) {
        next((0, http_errors_1.default)(406, "Not Valid Params"));
    }
    next();
};
exports.paramValidationMiddleware = paramValidationMiddleware;
