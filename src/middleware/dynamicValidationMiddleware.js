import { loginSchema, registerSchema } from "../utils/userSchema.js";

export const dynamicValidationMiddleware = (req, res, next) => {
  const path = req.url;
  console.log(path);
  const user = req.body;
  let { value, error } = {};
  if (path === "/login") {
    ({ value, error } = loginSchema.validate(user));
  } else if (path === "/register") {
    ({ value, error } = registerSchema.validate(user));
  }
  if (error) {
    res.status(406);
    return res.json("Not Acceptable");
  }
  next();
};
