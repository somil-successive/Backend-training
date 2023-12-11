import { Request, Response, NextFunction } from "express";

class CustomLogsMiddleware {
  public customLogsMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    console.log(
      `Request Method: ${req.method} URL: ${req.url}  Timestamp: ${new Date()}`
    );
    next();
  };
}
export default CustomLogsMiddleware;
