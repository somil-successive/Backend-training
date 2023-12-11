import { Request, Response, NextFunction } from "express";

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
    try {
      if (Object.keys(this.customHeader).length === 0) {
        throw new Error("No custom header added");
      }
      res.set(this.customHeader);
      next();
    } catch (error) {
      next(error);
    }
  };
}

export default CustomHeaderMiddleware;
