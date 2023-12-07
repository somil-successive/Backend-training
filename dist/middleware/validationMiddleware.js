"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationMiddleware = void 0;
const userSchema_1 = require("../utils/userSchema");
const validationMiddleware = (req, res, next) => {
    const user = req.body;
    const { error } = userSchema_1.registerSchema.validate(user);
    if (error) {
        res.status(406);
        return res.json(error);
    }
    next();
};
exports.validationMiddleware = validationMiddleware;
