import { registerSchema } from "../utils/userSchema";
import { Request, Response, NextFunction } from "express";

class ValidationMiddleware {
  public validationMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const user = req.body;
    const { error } = registerSchema.validate(user);
    if (error) {
      res.status(406);
      res.json(error);
    }
    next();
  };
}
export default new ValidationMiddleware().validationMiddleware;
