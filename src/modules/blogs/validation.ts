import Joi from "joi";

export const blogShema = Joi.object({
  title: Joi.string().required(),
  body: Joi.object({
    description: Joi.string(),
    links: Joi.any(),
  }),

  imageUrl: Joi.string(),
  categories: Joi.string()
    .valid("travel", "study", "fitness", "lifestyle", "sports")
    .default("sports")
    .lowercase()
    .required(),
  likes: Joi.number(),
  approved: Joi.boolean().required(),
  isSensitive: Joi.boolean().default(false).required(),
  tags: Joi.any(),
  createdBy: Joi.string(),
  updatedBy: Joi.string(),

  writer: Joi.object({
    id: Joi.string(),
    name: Joi.string(),
    email: Joi.string(),
    profilePicUrl: Joi.any(),
    famousWorks: Joi.any(),
  }),
});
