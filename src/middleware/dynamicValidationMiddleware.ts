import {
  countrySchema,
  userSchema1,
  userSchema2,
} from "../utils/userSchema.js";
import { Request, Response, NextFunction } from "express";
import Joi from "joi";

class DynamicValidationMiddleware {
  public dynamicValidationMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const path = req.url;
    const user = req.body;
    let validation: Joi.ValidationResult;
    if (path === "/login") {
      validation = userSchema2.validate(user);
    } else if (path === "/create") {
      validation = countrySchema.validate(user);
    } else {
      validation = userSchema1.validate(user);
    }
    if (validation.error) {
      res.status(406);
      res.json(validation.error);
    }

    next();
  };
}
export default new DynamicValidationMiddleware().dynamicValidationMiddleware;
