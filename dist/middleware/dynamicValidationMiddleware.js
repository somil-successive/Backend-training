import { userSchema1, userSchema2 } from "../utils/userSchema.js";
import createError from "http-errors";
class DynamicValidationMiddleware {
    constructor() {
        this.dynamicValidationMiddleware = (req, res, next) => {
            const path = req.url;
            console.log(path);
            const user = req.body;
            let value;
            let error;
            if (path === "/login") {
                ({ value, error } = userSchema2.validate(user));
            }
            else if (path === "/register") {
                ({ value, error } = userSchema1.validate(user));
            }
            if (error) {
                return next(createError(406, "Not Acceptable"));
            }
            next();
        };
    }
}
export default new DynamicValidationMiddleware().dynamicValidationMiddleware;
