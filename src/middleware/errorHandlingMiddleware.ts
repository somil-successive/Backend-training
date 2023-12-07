import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";

export const errorHandlingMiddleware = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!res.status) {
    res.status(400);
  }
  res.status(err.status).json({ error: err.message });
};
