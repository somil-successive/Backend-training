import { Request, Response } from "express";
import { HttpError } from "http-errors";

class ErrorHandlingMiddleware {
  public errorHandlingMiddleware = (
    err: HttpError,
    req: Request,
    res: Response,
    
  ): void => {
    res.status(err.status).json(err.message);
  };
}
export default new ErrorHandlingMiddleware().errorHandlingMiddleware;
