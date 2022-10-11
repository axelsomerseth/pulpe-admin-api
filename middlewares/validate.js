const Joi = require("joi");
const express = require("express");

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
    name: Joi.string().max(60).required(),
    description: Joi.string().max(255),
  }),
  update: Joi.object({
    name: Joi.string().max(60).required(),
    description: Joi.string().max(255),
  }),
};

/**
 * Validate incoming HTTP requests with Joi through a middleware.
 * @param {Joi.ObjectSchema} schema
 */
const validate = (schema) => {
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
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
