import express, { Router } from "express";
import {
  listProducts,
  readProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../handlers/products";
import validate from "../middlewares/validate";
import productSchema from "../schemas/products";

const router: Router = express.Router();

router.get("/", listProducts);

router.get("/:productId", readProduct);

router.post("/", validate(productSchema.create), createProduct);

router.put("/:productId", validate(productSchema.update), updateProduct);

router.delete("/:productId", deleteProduct);

export default router;
