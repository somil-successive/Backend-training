import jwt from "jsonwebtoken";
import createError from "http-errors";
import { configurations } from "../utils/config.js";
import createHttpError from "http-errors";
class AuthMiddlewarwe {
    constructor() {
        this.authMiddleware = (req, res, next) => {
            try {
                const token = req.headers.authorization;
                if (!token) {
                    next(createError(403, "Unauthorized - Token not provided."));
                }
                else {
                    jwt.verify(token !== null && token !== void 0 ? token : "", configurations.secretKey);
                    next();
                }
            }
            catch (error) {
                next(createHttpError(401, "Unauthorized -Invalid token"));
            }
        };
    }
}
export default new AuthMiddlewarwe().authMiddleware;
