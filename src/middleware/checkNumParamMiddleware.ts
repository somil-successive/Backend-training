import { Request, Response, NextFunction } from "express";

class CheckNumParamMiddleware {
  public checkNumParamMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ):void => {
    const query = req.query;
    if (!Number(query.id)) {
      res.send("Query is not a number");
    }
    next();
  };
}
export default new CheckNumParamMiddleware().checkNumParamMiddleware;
