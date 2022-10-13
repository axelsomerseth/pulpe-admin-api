/**
 * Validate incoming HTTP requests with Joi through a middleware.
 * @param {import("joi").ObjectSchema} schema
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

module.exports = validate;
