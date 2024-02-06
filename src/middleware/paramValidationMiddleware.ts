import { Request, Response, NextFunction } from "express";
import { isValidObjectId } from "mongoose";
class ParamValidationMiddleware {
  paramValidationMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;

      if (isValidObjectId(id)) {
        next();
      } else {
        res.status(406).send("not valid mongoose id");
      }
    } catch (error) {
      res.status(404).send(error);
    }
  };
}
export default new ParamValidationMiddleware().paramValidationMiddleware;
