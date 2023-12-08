import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import { IQuery } from "../interface/IQuery";

class CheckNumParamMiddleware {
  public checkNumParamMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    try {
      const { id }: IQuery = req.query;
      if (!Number(id)) {
        next(createHttpError(406, "id is not a number"));
      }
      next();
    } catch (err) {
      next(err);
    }
  };
}
export default new CheckNumParamMiddleware().checkNumParamMiddleware;
