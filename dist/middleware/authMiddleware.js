import jwt from "jsonwebtoken";
import createError from "http-errors";
import { configurations } from "../utils/config.js";
export const authMiddleware = (req, res, next) => {
    var _a;
    const token = req.headers.authorization;
    if (!token) {
        next(createError(403, "Unauthorized - Token not provided."));
    }
    try {
        jwt.verify(token !== null && token !== void 0 ? token : "", (_a = configurations.secretKey) !== null && _a !== void 0 ? _a : "", (err) => {
            if (err) {
                next(createError(401, "Unauthorized -Invalid token"));
            }
        });
        next();
    }
    catch (error) {
        next(createError(401, "Unauthorized -Invalid token"));
    }
};
