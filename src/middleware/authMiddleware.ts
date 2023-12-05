import jwt from "jsonwebtoken";
import createError from "http-errors";
import { Request, Response, NextFunction } from "express";
import { configurations } from "../utils/config.js";

class AuthMiddlewarwe {
  public authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {

    try {
      const token = req.headers.authorization;
      if (!token) {
        next(createError(403, "Unauthorized - Token not provided."));
      }
      else{
        const decodedUser = jwt.verify(token ?? "",configurations.secretKey);
        next();
      }
      
    } catch (error) {
      next(createError(401, "Unauthorized -Invalid token"));
    }
  };
}
export default new AuthMiddlewarwe().authMiddleware;