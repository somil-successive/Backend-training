import jwt from "jsonwebtoken";
import createError from "http-errors";
import { configurations } from "../utils/config.js";
class AuthMiddlewarwe {
    constructor() {
        this.authMiddleware = (req, res, next) => {
            try {
                const token = req.headers.authorization;
                if (!token) {
                    next(createError(403, "Unauthorized - Token not provided."));
                }
                else {
                    const decodedUser = jwt.verify(token !== null && token !== void 0 ? token : "", configurations.secretKey);
                    next();
                }
            }
            catch (error) {
                next(createError(401, "Unauthorized -Invalid token"));
            }
        };
    }
}
export default new AuthMiddlewarwe().authMiddleware;
