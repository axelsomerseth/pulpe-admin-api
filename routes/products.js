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

router.get("/:productId", readProduct);

router.post("/", createProduct);

router.put("/:productId", updateProduct);

router.delete("/:productId", deleteProduct);

module.exports = router;
