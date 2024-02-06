import { Request, Response, NextFunction } from "express";

class StringParamValidationMiddleware {
  static checkStringParams(paramName: string) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        //eslint-disable-next-line
        const paramValue: any = req.params[paramName];
        if (isNaN(paramValue)) {
          next();
        } else {
          res.status(406).send("Not valid params");
        }
      } catch (error) {
        res.status(500).send("Internal Server Error");
      }
    };
  }
}

export default StringParamValidationMiddleware;
