import { Request, Response, NextFunction } from "express";


class CustomHeaderMiddleware{
  public   customHeaderMiddleware = (customHeader: {}) => {
    return (req: Request, res: Response, next: NextFunction):void=> {
      res.set(customHeader);
      next();
    };
  };

}

export default new CustomHeaderMiddleware().customHeaderMiddleware;