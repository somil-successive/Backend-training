"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema_1 = require("../utils/userSchema");
const http_errors_1 = __importDefault(require("http-errors"));
class DynamicValidationMiddleware {
    constructor() {
        this.dynamicValidationMiddleware = (req, res, next) => {
            const path = req.url;
            console.log(path);
            const user = req.body;
            let value;
            let error;
            if (path === "/login") {
                ({ value, error } = userSchema_1.loginSchema.validate(user));
            }
            else if (path === "/register") {
                ({ value, error } = userSchema_1.registerSchema.validate(user));
            }
            if (error) {
                return next((0, http_errors_1.default)(406, "Not Acceptable"));
            }
            next();
        };
    }
}
exports.default = new DynamicValidationMiddleware().dynamicValidationMiddleware;
