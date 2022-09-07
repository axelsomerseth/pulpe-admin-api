const knex = require("../db/knex");

const listCategories = (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 15;
  res.end(`GET categories list. \nPage: ${page}. Limit: ${limit}.`);
};

const readCategory = (req, res) => {
  if (!isNaN(req.params.categoryId)) {
  }
  knex
    .select()
    .from("categories")
    .where("id", req.params.categoryId)
    .then(function (todo) {
      // res.end(`GET a category by id. \nCategory Id: ${req.params.categoryId}`);
      res.send(todo);
    });
};

const createCategory = (req, res) => {
  const newCategory = {
    id: 1,
    ...req.body,
  };

  // res.end("POST - Create a category.");
  res.json(newCategory);
};

const updateCategory = (req, res) => {
  const updatedCategory = {
    id: parseInt(req.params.categoryId),
    ...req.body,
  };
  // res.end(`PUT - Update a category. \nCategory Id: ${req.params.categoryId}`);
  res.json(updatedCategory);
};

const deleteCategory = (req, res, next) => {
  res.end(`DELETE a category. \nCategory Id: ${req.params.categoryId}`);
};

module.exports = {
  listCategories,
  readCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
