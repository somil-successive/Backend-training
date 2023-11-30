import { userSchema1 } from "../utils/userSchema.js";

export const validationMiddleware = (req, res, next) => {
  const user = req.body;
  const { value, error } = userSchema1.validate(user,{ abortEarly: false });
  console.log(error);
  if (error) return res.json(error);

  next();
};
