import { registerSchema } from "../utils/userSchema.js";
export const validationMiddleware = (req, res, next) => {
    const user = req.body;
    const { error } = registerSchema.validate(user);
    if (error) {
        res.status(406);
        return res.json(error);
    }
    next();
};
