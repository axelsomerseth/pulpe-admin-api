// @ts-check
// const { v4: uuidv4 } = require("uuid");
const productsRepository = require("../repository/products");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const listProducts = async (req, res, next) => {
  const page = req.query.page || 1;
  const size = req.query.size || 10;
  const list = await productsRepository.listProducts();
  res.json({
    page,
    size,
    data: list,
  });
};

const readProduct = async (req, res) => {
  const productId = req.params.itemId;
  const found = await productsRepository.getProductById(productId);
  if (found.length) {
    res.json(found[0]);
  } else {
    res.sendStatus(404);
  }
};

const createProduct = async (req, res) => {
  const newProduct = {
    id: 1,
    ...req.body,
  };
  const created = await productsRepository.addProduct(newProduct);
  if (created.length) {
    res.json(created[0]);
  } else {
    res.sendStatus(500);
  }
};

const updateProduct = async (req, res) => {
  const editedProduct = {
    id: parseInt(req.params.itemId),
    ...req.body,
  };
  const updated = await productsRepository.editProduct(editedProduct);
  if (updated.length) {
    res.json(updated[0]);
  } else {
    res.sendStatus(404);
  }
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
