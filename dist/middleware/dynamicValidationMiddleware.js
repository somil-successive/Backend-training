import { userSchema1, userSchema2 } from "../utils/userSchema.js";
import schema from "../Modules/Users/validation.js";
import { blogShema } from "../Modules/Blogs/validation.js";
class DynamicValidationMiddleware {
    constructor() {
        this.dynamicValidationMiddleware = (req, res, next) => {
            const path = req.url;
            const user = req.body;
            let validation;
            if (path === "/login") {
                validation = userSchema2.validate(user);
            }
            else if (path === "/register") {
                validation = schema.validate(user);
            }
            else if (path === "/create") {
                validation = blogShema.validate(user);
            }
            else {
                validation = userSchema1.validate(user);
            }
            if (validation.error) {
                res.status(406);
                res.json(validation.error);
            }
            else {
                next();
            }
        };
    }
}
export default new DynamicValidationMiddleware().dynamicValidationMiddleware;
