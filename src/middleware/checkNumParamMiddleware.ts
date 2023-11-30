import { Request, Response, NextFunction } from "express";

export const checkNumParamMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const query = req.query;
  if (!Number(query.id)) {
    res.send("Query is not a number");
  }
  next();
};
