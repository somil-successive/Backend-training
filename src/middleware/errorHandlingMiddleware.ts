import { Request, Response } from "express";

class ErrorHandlingMiddleware {
        //eslint-disable-next-line
  public errorHandlingMiddleware = (err: any,
    req: Request,
    res: Response,
  )=> {
    return res.status(err?.status || 500).json({ error: err.message });
  };

}
export default new ErrorHandlingMiddleware().errorHandlingMiddleware;
