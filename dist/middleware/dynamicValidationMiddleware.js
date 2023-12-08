"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema_1 = require("../utils/userSchema");
class DynamicValidationMiddleware {
    constructor() {
        this.dynamicValidationMiddleware = (req, res, next) => {
            const path = req.url;
            const user = req.body;
            let validation;
            if (path === "/login") {
                validation = userSchema_1.loginSchema.validate(user);
            }
            else {
                validation = userSchema_1.registerSchema.validate(user);
            }
            if (validation.error) {
                res.status(406);
                res.json(validation.error);
            }
            next();
        };
    }
}
exports.default = new DynamicValidationMiddleware().dynamicValidationMiddleware;
