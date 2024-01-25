import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { configurations } from "../utils/config";
import createHttpError from "http-errors";
import Repo from "../Modules/Users/repositories/Repository";

class AuthMiddlewarwe {
  private repo = new Repo();
  public authMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      //eslint-disable-next-line
      const token: any = req.headers.authorization;

      if (!token) {
        next(createHttpError(403, "Unauthorized - Token not provided."));
      } else {
        const decodedUser = jwt.verify(token ?? "", configurations.secretKey);
        //eslint-disable-next-line
        const { email }: any = decodedUser;
        const user = await this.repo.getByEmail(email);
        if (!user) {
          next(createHttpError(401, "Unauthorized-User Not Exist"));
        }

        next();
      }
    } catch (error) {
      next(createHttpError(401, "Unauthorized -Invalid token"));
    }
  };
}
export default new AuthMiddlewarwe().authMiddleware;
