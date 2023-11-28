import { userSchema1 } from "../utils/userSchema.js";

export const validationMiddleware = (req, res, next) => {
  const user = req.body;
  const { value, error } = userSchema1.validate(user);
  if (error) return res.json("Unauthorised User");
  next();
};
