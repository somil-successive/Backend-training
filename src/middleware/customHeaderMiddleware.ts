import { Request, Response, NextFunction } from "express";
import createError from "http-errors";

class CustomHeaderMiddleware {
  public customHeader: object;
  constructor(customHeader: object) {
    this.customHeader = customHeader;
  }
  public customHeaderMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    if (Object.keys(this.customHeader).length === 0) {
      return next(createError(411, "No Headers Added"));
    }
    res.set(this.customHeader);
    next();
  };
}

export default CustomHeaderMiddleware;
