"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomLogsMiddleware {
    constructor() {
        this.customLogsMiddleware = (req, res, next) => {
            console.log(`Request Method: ${req.method} URL: ${req.url}  Timestamp: ${new Date()}`);
            next();
        };
    }
}
exports.default = CustomLogsMiddleware;
