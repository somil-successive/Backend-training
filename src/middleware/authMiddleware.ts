import jwt from "jsonwebtoken";
import createError from "http-errors";
import { Request, Response, NextFunction } from "express";
import { configurations } from "../utils/config.js";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    next(createError(403, "Unauthorized - Token not provided."));
  }
  try {
    jwt.verify(token ?? "", configurations.secretKey ?? "", (err) => {
      if (err) {
        next(createError(401, "Unauthorized -Invalid token"));
      }
    });
    next();
  } catch (error) {
    next(createError(401, "Unauthorized -Invalid token"));
  }
};
