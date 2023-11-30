import { userSchema1, userSchema2 } from "../utils/userSchema.js";
export const dynamicValidationMiddleware = (req, res, next) => {
    const path = req.url;
    console.log(path);
    const user = req.body;
    let { value, error } = {};
    if (path === "/login") {
        ({ value, error } = userSchema2.validate(user));
    }
    else {
        ({ value, error } = userSchema1.validate(user));
    }
    if (error)
        return res.json("Unauthorised User");
    next();
};
