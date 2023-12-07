"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customLogsMiddleware = void 0;
const customLogsMiddleware = (req, res, next) => {
    console.log(`Request Method: ${req.method} URL: ${req.url}  Timestamp: ${new Date()}`);
    next();
};
exports.customLogsMiddleware = customLogsMiddleware;
