import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { configurations } from "../utils/config";
import createHttpError from "http-errors";


class AuthMiddlewarwe {
  public authMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      //eslint-disable-next-line
      const token: any = req.headers.authorization;
      const user = req.body;

      console.log(token);
      if (!token) {
        next(createHttpError(403, "Unauthorized - Token not provided."));
      } else {
        jwt.verify(token ?? "", configurations.secretKey) ;
        // const user = await User.findOne({ email: decoded.user.email });
        // if (!user) {
        //   res.status(404).send("User Not Found");
        // }

        next();
      }
    } catch (error) {
      console.log(">.........................");
      next(createHttpError(401, "Unauthorized -Invalid token"));
    }
  };
}
export default new AuthMiddlewarwe().authMiddleware;
