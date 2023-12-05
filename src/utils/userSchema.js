import Joi from "joi";

export const schema = {
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
};

export const registerSchema = Joi.object({
  ...schema,
  email: Joi.string().email().required(),
});

export const loginSchema = Joi.object({
  ...schema,
});
