import { Request, Response, NextFunction } from "express";

class ErrorHandlingMiddleware {
  public errorHandlingMiddleware = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    console.log(err);
    res.send(err.message);
  };
}
export default new ErrorHandlingMiddleware().errorHandlingMiddleware;
