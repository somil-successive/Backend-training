import { userSchema1, userSchema2 } from "../utils/userSchema.js";
import { Request, Response, NextFunction } from "express";
import createError from "http-errors";

class DynamicValidationMiddleware {
  public dynamicValidationMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const path = req.url;
    console.log(path);
    const user = req.body;
    let value: any;
    let error: any;
    if (path === "/login") {
      ({ value, error } = userSchema2.validate(user));
    } else if (path === "/register") {
      ({ value, error } = userSchema1.validate(user));
    }
    if (error) {
      return next(createError(406, "Not Acceptable"));
    }
    next();
  };
}
export default new DynamicValidationMiddleware().dynamicValidationMiddleware;
