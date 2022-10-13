const express = require("express");
const router = express.Router();
const {
  listProducts,
  readProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../handlers/products");
const validate = require("../middlewares/validate");
const productSchema = require("../schemas/products");

router.get("/", listProducts);

router.get("/:productId", readProduct);

router.post("/", validate(productSchema.create), createProduct);

router.put("/:productId", validate(productSchema.update), updateProduct);

router.delete("/:productId", deleteProduct);

module.exports = router;
