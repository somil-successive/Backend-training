import jwt from "jsonwebtoken";
import createError from "http-errors";
class AuthMiddlewarwe {
    constructor() {
        this.authMiddleware = (req, res, next) => {
            const token = req.headers.authorization;
            if (!token) {
                next(createError(403, "Unauthorized - Token not provided."));
            }
            try {
                const decodedUser = jwt.verify(token !== null && token !== void 0 ? token : "", "123");
                req.body.user = decodedUser;
                next();
            }
            catch (error) {
                next(createError(401, "Unauthorized -Invalid token"));
            }
        };
    }
}
export default new AuthMiddlewarwe().authMiddleware;
