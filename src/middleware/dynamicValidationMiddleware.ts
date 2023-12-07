import {
  countrySchema,
  userSchema1,
  userSchema2,
} from "../utils/userSchema.js";
import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import { ValidationError } from "joi";

class DynamicValidationMiddleware {
  public dynamicValidationMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const path = req.url;
    console.log(path);
    const user = req.body;
    let err: ValidationError | undefined;
    if (path === "/login") {
      const { error } = userSchema2.validate(user);
      err = error;
    } else if (path === "/register") {
      const { error } = userSchema1.validate(user);
      err = error;
    } else if (path === "/create") {
      const { error } = countrySchema.validate(user);
      err = error;
    }
    else{
      next();
    }
    if (err) {
      next(createError(406, "Not Acceptable"));
    }
    else{
      next();
    }
    
  };
}
export default new DynamicValidationMiddleware().dynamicValidationMiddleware;
