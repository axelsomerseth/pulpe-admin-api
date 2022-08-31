const express = require("express");
const router = express.Router();

// List categories
router.get("/", (req, res, next) => {
  console.debug(new Date(req.requestTime).toString());
  const page = req.query.page || 1;
  const limit = req.query.limit || 15;
  res.end(`GET categories list. \nPage: ${page}. Limit: ${limit}.`);
});

// Get a category by id
router.get("/:categoryId", (req, res, next) => {
  res.end(`GET a category by id. \nCategory Id: ${req.params.categoryId}`);
});

// Create a category
router.post("/", (req, res, next) => {
  const newCategory = {
    id: 1,
    ...req.body,
  };

  // res.end("POST - Create a category.");
  res.json(newCategory);
});

// Update a category
router.put("/:categoryId", (req, res, next) => {
  const updatedCategory = {
    id: parseInt(req.params.categoryId),
    ...req.body,
  };
  // res.end(`PUT - Update a category. \nCategory Id: ${req.params.categoryId}`);
  res.json(updatedCategory);
});

// Delete a category
router.delete("/:categoryId", (req, res, next) => {
  res.end(`DELETE a category. \nCategory Id: ${req.params.categoryId}`);
});

module.exports = router;
