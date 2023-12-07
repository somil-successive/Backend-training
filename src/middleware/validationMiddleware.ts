import createHttpError from "http-errors";
import { registerSchema } from "../utils/userSchema";
import { Request, Response, NextFunction } from "express";

export const validationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.body;
  const { error } = registerSchema.validate(user);
  if (error) {
    res.status(406);
    return res.json(error);
  }
  next();
};
