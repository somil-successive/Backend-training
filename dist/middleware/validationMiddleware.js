import { userSchema1 } from "../utils/userSchema.js";
class ValidationMiddleware {
    constructor() {
        this.validationMiddleware = (req, res, next) => {
            const user = req.body;
            const { value, error } = userSchema1.validate(user);
            if (error)
                res.json("Unauthorised User");
            next();
        };
    }
}
export default new ValidationMiddleware().validationMiddleware;
