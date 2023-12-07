import createHttpError from "http-errors";
import { userSchema1 } from "../utils/userSchema.js";
import { Request, Response, NextFunction } from "express";

export const validationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.body;
  const { value, error } = userSchema1.validate(user);
  if (error) {
    res.status(406);
    return res.json(error);
  }
  next();
};
