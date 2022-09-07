// @ts-check
const { v4: uuidv4 } = require("uuid");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const listProducts = (req, res, next) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 15;
  res.end(`GET items list. \nPage: ${page}. Limit: ${limit}.`);
};

const readProduct = (req, res) => {
  res.end(`GET item by id. \nItem Id: ${req.params.itemId}`);
};

const createProduct = (req, res) => {
  const newProduct = {
    id: 1,
    uuid: uuidv4(),
    ...req.body,
  };
  res.json(newProduct);
};

const updateProduct = (req, res) => {
  const updatedProduct = {
    id: parseInt(req.params.itemId),
    uuid: uuidv4(),
    ...req.body,
  };
  res.json(updatedProduct);
};

const deleteProduct = (req, res) => {
  res.end(`DELETE an item. \nItem Id: ${req.params.itemId}`);
};

module.exports = {
  listProducts,
  readProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
