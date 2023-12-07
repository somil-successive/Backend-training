"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicValidationMiddleware = void 0;
const userSchema_1 = require("../utils/userSchema");
const dynamicValidationMiddleware = (req, res, next) => {
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
        return res.json(validation.error);
    }
    next();
};
exports.dynamicValidationMiddleware = dynamicValidationMiddleware;
