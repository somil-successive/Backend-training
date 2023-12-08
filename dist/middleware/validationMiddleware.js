"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema_1 = require("../utils/userSchema");
class ValidationMiddleware {
    constructor() {
        this.validationMiddleware = (req, res, next) => {
            const user = req.body;
            const { error } = userSchema_1.registerSchema.validate(user);
            if (error) {
                res.status(406);
                res.json(error);
            }
            next();
        };
    }
}
exports.default = new ValidationMiddleware().validationMiddleware;
