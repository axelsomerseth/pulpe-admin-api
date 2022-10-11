const Joi = require("joi");

const categorySchema = {
  create: Joi.object({
    name: Joi.string().max(60).required(),
    description: Joi.string().max(255),
  }),
  update: Joi.object({
    name: Joi.string().max(60).required(),
    description: Joi.string().max(255),
  }),
};

const productSchema = {
  create: Joi.object({
    name: Joi.string().max(100).required(),
    description: Joi.string().max(255).required(),
    category_id: Joi.number().required(),
    price: Joi.number().required(),
    stock: Joi.number().required(),
  }),
  update: Joi.object({
    name: Joi.string().max(100).required(),
    description: Joi.string().max(255).required(),
    category_id: Joi.number().required(),
    price: Joi.number().required(),
    stock: Joi.number().required(),
  }),
};

/**
 * Validate incoming HTTP requests with Joi through a middleware.
 * @param {Joi.ObjectSchema} schema
 */
const validate = (schema) => {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  return (req, res, next) => {
    const result = schema.validate({ ...req.body });
    if (result.error) {
      res.status(400);
      res.json({
        errors: result.error.details,
      });
      return;
    }
    next();
  };
};

module.exports = {
  categorySchema,
  productSchema,
  validate,
};
