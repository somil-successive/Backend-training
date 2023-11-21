import { userSchema } from "../utils/userSchema.js";

export const validationMiddleware = (req, res, next) => {
  const user = req.body;
  const { value,error } = userSchema.validate(user);

  if (error) next(createError(400, "Bad request - Invalid user."))

  next();
};
