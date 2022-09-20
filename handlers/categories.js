const { response } = require("express");
const categoriesRepository = require("../repository/categories");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const listCategories = async (req, res, next) => {
  const page = req.query.page || 1;
  const size = req.query.size || 10;
  const list = await categoriesRepository.listCategories();
  res.send({
    page,
    size,
    data: list,
  });
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const readCategory = async (req, res) => {
  const categoryId = req.params.categoryId;
  const found = await categoriesRepository.getCategoryById(categoryId);
  if (found.length) {
    res.send(found[0]);
  } else {
    res.sendStatus(404);
  }
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const createCategory = async (req, res) => {
  const newCategory = {
    name: req.body.name,
    description: req.body.description,
  };
  const created = await categoriesRepository.addCategory(newCategory);
  if (created.length) {
    res.status(201);
    res.send(created[0]);
  } else {
    res.sendStatus(500);
  }
};

const updateCategory = async (req, res) => {
  const editedCategory = {
    id: parseInt(req.params.categoryId),
    ...req.body,
  };
  const updated = await categoriesRepository.editCategory(editedCategory);
  if (updated.length) {
    res.json(updated[0]);
  } else {
    res.sendStatus(404);
  }
};

const deleteCategory = async (req, res, next) => {
  const categoryId = req.params.categoryId;
  const deleted = await categoriesRepository.deleteCategory(categoryId);
  if (deleted.deletedRows) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
};

module.exports = {
  listCategories,
  readCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
