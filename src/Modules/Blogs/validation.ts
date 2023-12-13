import Joi, { string } from "joi";

export const blogShema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  body: Joi.string().min(10).max(1000).required(),
  createdAt: Joi.date(),
  likes: Joi.string(),
  categories: Joi.string(),
  imageUrl: Joi.string(),
  isSensitive: Joi.boolean(),
  writer:Joi.object()
});
