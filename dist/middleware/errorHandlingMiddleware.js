"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlingMiddleware = void 0;
const errorHandlingMiddleware = (err, req, res, next) => {
    const statusCode = 400;
    if (!res.status) {
        res.status(statusCode);
    }
    res.status(err.status).json({ error: err.message });
};
exports.errorHandlingMiddleware = errorHandlingMiddleware;
