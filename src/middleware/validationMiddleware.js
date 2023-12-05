import { registerSchema } from "../utils/userSchema.js";

export const validationMiddleware = (req, res, next) => {
  const user = req.body;
  const { value, error } = registerSchema.validate(user, { abortEarly: false });
  console.log(error);
  if (error) {
    res.status(406);
    return res.json(error);
  }

  next();
};
