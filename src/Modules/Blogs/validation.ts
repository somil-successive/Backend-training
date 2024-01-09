import Joi from "joi";

export const blogShema = Joi.object({
  title: Joi.string().required(),
  body: Joi.object({
    description: Joi.string().required(),
    links: Joi.string(),
  }),

  imageUrl: Joi.string(),
  categories: Joi.string()
    .valid("travel", "study", "fitness", "lifestyle", "sports")
    .default("sports")
    .lowercase(),
  likes: Joi.number(),
  approved: Joi.boolean().required(),
  isSensitive: Joi.boolean().default(false).required(),
  tags: Joi.string(),

  writer: Joi.object({
    id: Joi.string(),
    name: Joi.string(),
    email: Joi.string(),
    profilePicUrl: Joi.string(),
    famousWorks: Joi.string(),
  }),
});
