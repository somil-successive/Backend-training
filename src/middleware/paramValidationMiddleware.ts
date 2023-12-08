import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
class ParamValidationMiddleware {
  paramValidationMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    if (!Number(id)) {
      return next(createHttpError(406, "Not Valid Params"));
    }
    next();
  };
}
export default new ParamValidationMiddleware().paramValidationMiddleware;
