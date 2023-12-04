import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
class ParamValidationMiddleware {
  paramValidationMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.query;
    if (!Number(id)) {
      return next(createError(406, "Not Valid Params"));
    }
    next();
  };
}
export default new ParamValidationMiddleware().paramValidationMiddleware;
