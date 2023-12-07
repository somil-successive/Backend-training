import { Request, Response, NextFunction } from "express";

import createError from "http-errors";
import IQuery from "../interface/IQuery";
export const paramValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id }: IQuery = req.params;
  if (!Number(id)) {
    next(createError(406, "Not Valid Params"));
  }
  next();
};
