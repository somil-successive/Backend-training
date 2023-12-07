import { userSchema1 } from "../utils/userSchema.js";
export const validationMiddleware = (req, res, next) => {
    const user = req.body;
    const { value, error } = userSchema1.validate(user);
    if (error) {
        res.status(406);
        return res.json(error);
    }
    next();
};
