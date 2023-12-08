import { loginSchema, registerSchema } from "../utils/userSchema";
import { Request, Response, NextFunction } from "express";
import { ValidationResult } from "joi";
import { IBody } from "../interface/IBody";

class DynamicValidationMiddleware {
  public dynamicValidationMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const path: string = req.url;
    const user: IBody = req.body;
    let validation: ValidationResult;
    if (path === "/login") {
      validation = loginSchema.validate(user);
    } else {
      validation = registerSchema.validate(user);
    }
    if (validation.error) {
      res.status(406);
      res.json(validation.error);
    }

    next();
  };
}
export default new DynamicValidationMiddleware().dynamicValidationMiddleware;
