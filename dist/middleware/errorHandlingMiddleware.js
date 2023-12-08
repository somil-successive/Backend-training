"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandlingMiddleware {
    constructor() {
        this.errorHandlingMiddleware = (err, req, res, next) => {
            res.status(err.status).json({ error: err.message });
        };
    }
}
exports.default = new ErrorHandlingMiddleware().errorHandlingMiddleware;
