import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";

export const errorHandlingMiddleware = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 400;
  if (!res.status) {
    res.status(statusCode);
  }

  res.status(err.status).json({ error: err.message });
};
