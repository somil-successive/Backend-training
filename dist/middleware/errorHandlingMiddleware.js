"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandlingMiddleware {
    constructor() {
        this.errorHandlingMiddleware = (err, req, res, next) => {
            console.log(err);
            res.send(err.message);
        };
    }
}
exports.default = new ErrorHandlingMiddleware().errorHandlingMiddleware;
