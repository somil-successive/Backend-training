import jwt from "jsonwebtoken";
import createError from "http-errors";
import {Request,Response,NextFunction} from 'express';

class AuthMiddlewarwe{
  public  authMiddleware = (req:Request, res:Response, next:NextFunction):void => {
    const token = req.headers.authorization;
  
    if (!token) {
      next(createError(403, "Unauthorized - Token not provided."));
    }
    try {
      const decodedUser = jwt.verify(token ?? "", "123");
      req.body.user = decodedUser;
      next();
    } catch (error) {
      next(createError(401, "Unauthorized -Invalid token"));
    }
  };
  

}
export default new AuthMiddlewarwe().authMiddleware;

