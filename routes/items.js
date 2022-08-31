const { v4: uuidv4 } = require("uuid");
const express = require("express");
const router = express.Router();

// Get items list.
router.get("/", (req, res, next) => {
  console.debug(new Date(req.requestTime).toString());
  const page = req.query.page || 1;
  const limit = req.query.limit || 15;
  res.end(`GET items list. \nPage: ${page}. Limit: ${limit}.`);
});

// Get an item by id.
router.get("/:itemId", (req, res, next) => {
  res.end(`GET item by id. \nItem Id: ${req.params.itemId}`);
});

// Create an item.
router.post("/", (req, res, next) => {
  const newProduct = {
    id: 1,
    uuid: uuidv4(),
    ...req.body,
  };
  // res.end("POST - Create an item.");
  res.json(newProduct);
});

// Update an item.
router.put("/:itemId", (req, res, next) => {
  const updatedProduct = {
    id: parseInt(req.params.itemId),
    uuid: uuidv4(),
    ...req.body,
  };
  // res.end(`PUT - Update an item. \nItem Id: ${req.params.itemId}`);
  res.json(updatedProduct);
});

// Delete an item.
router.delete("/:itemId", (req, res, next) => {
  res.end(`DELETE an item. \nItem Id: ${req.params.itemId}`);
});

module.exports = router;
