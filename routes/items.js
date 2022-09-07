const express = require("express");
const router = express.Router();
const {
  listProducts,
  readProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../handlers/products");

router.get("/", listProducts);

router.get("/:itemId", readProduct);

router.post("/", createProduct);

router.put("/:itemId", updateProduct);

router.delete("/:itemId", deleteProduct);

module.exports = router;
