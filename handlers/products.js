// const { v4: uuidv4 } = require("uuid");
const productsRepository = require("../repository/products");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const listProducts = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const size = parseInt(req.query.size) || 10;
  const search = req.query.search || "";
  let list = [];
  if (search) {
    list = await productsRepository.searchForProducts(search);
  } else {
    list = await productsRepository.listProducts();
  }
  res.json({
    page: 1,
    size: list.length,
    data: list,
  });
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const readProduct = async (req, res) => {
  const productId = req.params.productId;
  const found = await productsRepository.getProductById(productId);
  if (found.length) {
    res.json(found[0]);
  } else {
    res.sendStatus(404);
  }
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
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

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const updateProduct = async (req, res) => {
  const editedProduct = {
    id: parseInt(req.params.productId),
    ...req.body,
  };
  const updated = await productsRepository.editProduct(editedProduct);
  if (updated.length) {
    res.json(updated[0]);
  } else {
    res.sendStatus(404);
  }
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const deleteProduct = async (req, res) => {
  const productId = req.params.productId;
  const deleted = await productsRepository.deleteProduct(productId);
  if (deleted.deletedRows) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
};

module.exports = {
  listProducts,
  readProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
