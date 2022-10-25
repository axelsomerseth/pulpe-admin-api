const Joi = require("joi");

const categorySchema = {
  create: Joi.object({
    name: Joi.string().max(60).required(),
    description: Joi.string().max(255),
  }),
  update: Joi.object({
    id: Joi.number().required(),
    name: Joi.string().max(60).required(),
    description: Joi.string().max(255),
  }),
};

module.exports = categorySchema;
