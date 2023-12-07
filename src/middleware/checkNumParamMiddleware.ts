import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import IQuery from "../interface/IQuery";

export const checkNumParamMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id }: IQuery = req.query;
    if (!Number(id)) {
      next(createError(406, "id is not a number"));
    }
    next();
  } catch (err) {
    next(err);
  }
};
