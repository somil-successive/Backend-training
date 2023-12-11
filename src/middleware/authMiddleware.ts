import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { configurations } from "../utils/config";
import createHttpError from "http-errors";

class AuthMiddlewarwe {
  public authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        next(createHttpError(403, "Unauthorized - Token not provided."));
      } else {
        const decodedUser = jwt.verify(token ?? "", configurations.secretKey);
        next();
      }
    } catch (error) {
      next(createHttpError(401, "Unauthorized -Invalid token"));
    }
  };
}
export default AuthMiddlewarwe;
