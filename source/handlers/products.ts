// TODO: implement UUID for products.
// const productsRepository = require("../repository/products");
import { Handler, Request, Response } from "express";

const listProducts: Handler = async (req: Request, res: Response) => {
  const page = req.query.page || 1;
  const size = req.query.size || 10;
  const search = req.query.search || "";
  let list: string[] = [];
  // if (search) {
  //   list = await productsRepository.searchForProducts(search);
  // } else {
  //   list = await productsRepository.listProducts();
  // }
  res.json({
    page: 1,
    size: list.length,
    data: list,
  });
};

const readProduct: Handler = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  // const found = await productsRepository.getProductById(productId);
  const found: string[] = [];
  if (found.length) {
    res.json(found[0]);
  } else {
    res.sendStatus(404);
  }
};

const createProduct: Handler = async (req: Request, res: Response) => {
  const newProduct = {
    id: 1,
    ...req.body,
  };
  // const created = await productsRepository.addProduct(newProduct);
  const created: string[] = [];
  if (created.length) {
    res.json(created[0]);
  } else {
    res.sendStatus(500);
  }
};

const updateProduct: Handler = async (req: Request, res: Response) => {
  const editedProduct = {
    id: parseInt(req.params.productId),
    ...req.body,
  };
  // const updated = await productsRepository.editProduct(editedProduct);
  const updated: string[] = [];
  if (updated.length) {
    res.json(updated[0]);
  } else {
    res.sendStatus(404);
  }
};

const deleteProduct: Handler = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  // const deleted = await productsRepository.deleteProduct(productId);
  const deleted = { deletedRows: 0 };
  if (deleted.deletedRows) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
};

export {
  listProducts,
  readProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
