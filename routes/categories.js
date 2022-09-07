const express = require("express");
const router = express.Router();
const {
  listCategories,
  readCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../handlers/categories");

router.get("/", listCategories);

router.get("/:categoryId", readCategory);

router.post("/", createCategory);

router.put("/:categoryId", updateCategory);

router.delete("/:categoryId", deleteCategory);

module.exports = router;
