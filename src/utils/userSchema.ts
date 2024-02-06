import Joi from "joi";

export const userSchema1 = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
});

export const userSchema2 = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
});

export const countrySchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  captain: Joi.string().required(),
});
