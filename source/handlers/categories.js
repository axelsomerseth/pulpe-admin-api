const categoriesRepository = require("../repository/categories");

const listCategories = async (req, res, next) => {
  const page = parseInt(req.query.page || 1);
  const size = parseInt(req.query.size || 10);
  const list = await categoriesRepository.listCategories();
  res.send({
    page,
    size,
    data: list,
  });
};

const readCategory = async (req, res) => {
  const categoryId = req.params.categoryId;
  const found = await categoriesRepository.getCategoryById(categoryId);
  if (found.length) {
    res.status(200);
    res.send(found[0]);
  } else {
    res.sendStatus(404);
  }
};

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
    res.status(500);
    res.send();
  }
};

const updateCategory = async (req, res) => {
  const editedCategory = {
    id: parseInt(req.params.categoryId),
    ...req.body,
  };
  const updated = await categoriesRepository.editCategory(editedCategory);
  if (updated.length) {
    res.status(200);
    res.json(updated[0]);
  } else {
    res.sendStatus(404);
  }
};

const deleteCategory = async (req, res) => {
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
