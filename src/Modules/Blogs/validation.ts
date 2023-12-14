import Joi, { string } from "joi";

export const blogShema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  body: Joi.string().min(10).max(1000).required(),
  likes: Joi.number(),
  categories: Joi.string().required(),
  imageUrl: Joi.string().required(),
  isSensitive: Joi.boolean().required(),
  tags: Joi.array(),
  writer: Joi.object().required(),
});
