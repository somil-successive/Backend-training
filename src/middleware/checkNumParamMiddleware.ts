import { Request, Response, NextFunction } from "express";
import createError from "http-errors";

export const checkNumParamMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = req.query;
    if (!Number(query.id)) {
      res.send("id is not a number");
    }
    next();
  } catch (err) {
    next(err);
  }
};
