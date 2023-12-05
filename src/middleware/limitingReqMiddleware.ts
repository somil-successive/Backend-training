import { Request, Response, NextFunction } from "express";

class LimitingReqMiddleware {
  public limitingReqMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    let count = 0;
    const limit = 5;
    let time: number,
      time1: number = 0;
    if (count === 0) {
      time1 = new Date().getSeconds();
      time = new Date().getSeconds();
    } else {
      time = new Date().getSeconds();
      if (time < time1) time += 59;
    }
    if (count < limit && time <= time1 + 5) {
      count++;
      next();
    } else if (time > time1 + 5) {
      count = 0;
      next();
    } else {
      res.status(429).send("Limit Exceeds");
    }
  };
}
export default new LimitingReqMiddleware().limitingReqMiddleware;
