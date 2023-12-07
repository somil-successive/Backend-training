import { loginSchema, registerSchema } from "../utils/userSchema.js";
export const dynamicValidationMiddleware = (req, res, next) => {
    const path = req.url;
    const user = req.body;
    let validation;
    if (path === "/login") {
        validation = loginSchema.validate(user);
    }
    else {
        validation = registerSchema.validate(user);
    }
    if (validation.error) {
        res.status(406);
        return res.json(validation.error);
    }
    next();
};
