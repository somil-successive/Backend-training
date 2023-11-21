import { userSchema } from "../utils/userSchema.js";

export const validationMiddleware = (req, res, next) => {
  const user = req.body;
  const { value,error } = userSchema.validate(user);

  if (error) return res.json("Unauthorised User");

  next();
};
