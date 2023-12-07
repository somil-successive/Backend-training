import { registerSchema} from "../utils/userSchema";
import { Request, Response, NextFunction } from "express";

class ValidationMiddleware {
  public validationMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const user = req.body;
    const { value, error } = registerSchema.validate(user);
    if (error) {
      res.status(406);
      res.send(error.details);
    }

    next();
  };
}
export default new ValidationMiddleware().validationMiddleware;
