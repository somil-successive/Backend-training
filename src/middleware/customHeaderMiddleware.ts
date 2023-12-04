import { Request, Response, NextFunction } from "express";


class CustomHeaderMiddleware{
  public customHeader:object;
  constructor(customHeader:object){
    this.customHeader=customHeader;
  }
  public customHeaderMiddleware =(req: Request, res: Response, next: NextFunction):void=> {
      res.set(this.customHeader);
      next();
    };
  };



export default new CustomHeaderMiddleware({"Coontent":"txt"}).customHeaderMiddleware;