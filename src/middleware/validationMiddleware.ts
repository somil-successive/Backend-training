import { userSchema1 } from "../utils/userSchema.js";
import { Request, Response, NextFunction } from "express";

class ValidationMiddleware {
  public validationMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const user = req.body;
    const { value, error } = userSchema1.validate(user);
    if (error) res.json("Unauthorised User");
    next();
  };
}
export default new ValidationMiddleware().validationMiddleware;
