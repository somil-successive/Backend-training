import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";

class ErrorHandlingMiddleware {
  public errorHandlingMiddleware = (
    err: HttpError,
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    res.status(err.status).json({ error: err.message });
  };
}
export default new ErrorHandlingMiddleware().errorHandlingMiddleware;
