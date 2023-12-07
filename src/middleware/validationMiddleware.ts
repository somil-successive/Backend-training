import createHttpError from "http-errors";
import { registerSchema } from "../utils/userSchema.js";
import { Request, Response, NextFunction } from "express";
import IBody from "../interface/IBody.js";

export const validationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user: IBody = req.body;
  const { error } = registerSchema.validate(user);
  if (error) {
    res.status(406);
    return res.json(error);
  }
  next();
};
