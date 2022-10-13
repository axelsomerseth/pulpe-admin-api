const express = require("express");
const router = express.Router();
const {
  listCategories,
  readCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../handlers/categories");
const validate = require("../middlewares/validate");
const categorySchema = require("../schemas/categories");

router.get("/", listCategories);

router.get("/:categoryId", readCategory);

router.post("/", validate(categorySchema.create), createCategory);

router.put("/:categoryId", validate(categorySchema.update), updateCategory);

router.delete("/:categoryId", deleteCategory);

module.exports = router;
