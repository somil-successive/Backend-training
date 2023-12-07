import { ValidationResult } from "joi";
import { loginSchema, registerSchema } from "../utils/userSchema.js";
import { Request, Response, NextFunction } from "express";
import IBody from "../interface/IBody.js";

export const dynamicValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
    return res.json(validation.error);
  }

  next();
};
