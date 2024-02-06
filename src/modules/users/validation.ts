import Joi from "joi";

class Validations {
  public schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    address: Joi.string().min(3).max(30).required(),
    password: Joi.string().alphanum().min(3).max(10).required(),
  });
}
export default new Validations().schema;
