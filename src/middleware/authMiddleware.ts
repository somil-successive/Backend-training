import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { configurations } from "../utils/config";
import createHttpError from "http-errors";
import Repo from "../modules/users/repositories/Repository";

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
        const decodedUser = jwt.verify(
          token,
          configurations.secretKey
        ) as JwtPayload;

        //eslint-disable-next-line
        const { email }: any = decodedUser;

        const user = await this.repo.getByEmail(decodedUser.email);
        if (!user) {
          next(createHttpError(401, "Unauthorized-User Not Exist"));
        }
        if (
          (req.path === "/create" && req.method === "POST") ||
          (req.path === "/bulk-upload" && req.method === "POST")
        ) {
          req.body.createdBy = email;
        } else {
          req.body.updatedBy = email;
        }
        next();
      }
    } catch (error) {
      return res.status(403).json({ message: "invalid token" });
    }
  };
}
export default new AuthMiddlewarwe().authMiddleware;
