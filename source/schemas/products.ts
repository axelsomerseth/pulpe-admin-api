import Joi from "../../node_modules/joi/lib/index";

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

export default productSchema;
