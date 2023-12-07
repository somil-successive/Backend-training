import { countrySchema, userSchema1, userSchema2, } from "../utils/userSchema.js";
class DynamicValidationMiddleware {
    constructor() {
        this.dynamicValidationMiddleware = (req, res, next) => {
            const path = req.url;
            const user = req.body;
            let validation;
            if (path === "/login") {
                validation = userSchema2.validate(user);
            }
            else if (path === "/create") {
                validation = countrySchema.validate(user);
            }
            else {
                validation = userSchema1.validate(user);
            }
            if (validation.error) {
                res.status(406);
                res.json(validation.error);
            }
            next();
        };
    }
}
export default new DynamicValidationMiddleware().dynamicValidationMiddleware;
