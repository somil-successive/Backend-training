"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema_1 = require("../utils/userSchema");
class ValidationMiddleware {
    constructor() {
        this.validationMiddleware = (req, res, next) => {
            const user = req.body;
            const { value, error } = userSchema_1.registerSchema.validate(user);
            if (error) {
                res.status(406);
                res.send(error.details);
            }
            next();
        };
    }
}
exports.default = new ValidationMiddleware().validationMiddleware;
