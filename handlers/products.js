const express = require("express");
const { v4: uuidv4 } = require("uuid");

const listProducts = (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 15;
  res.end(`GET items list. \nPage: ${page}. Limit: ${limit}.`);
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const readProduct = (req, res, next) => {
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
