"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// const { v4: uuidv4 } = require("uuid");
const productsRepository = require("../repository/products");
/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const listProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const page = parseInt(req.query.page || 1);
    const size = parseInt(req.query.size || 10);
    const search = req.query.search || "";
    let list = [];
    if (search) {
        list = yield productsRepository.searchForProducts(search);
    }
    else {
        list = yield productsRepository.listProducts();
    }
    res.json({
        page: 1,
        size: list.length,
        data: list,
    });
});
/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const readProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    const found = yield productsRepository.getProductById(productId);
    if (found.length) {
        res.json(found[0]);
    }
    else {
        res.sendStatus(404);
    }
});
/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = Object.assign({ id: 1 }, req.body);
    const created = yield productsRepository.addProduct(newProduct);
    if (created.length) {
        res.json(created[0]);
    }
    else {
        res.sendStatus(500);
    }
});
/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const editedProduct = Object.assign({ id: parseInt(req.params.productId) }, req.body);
    const updated = yield productsRepository.editProduct(editedProduct);
    if (updated.length) {
        res.json(updated[0]);
    }
    else {
        res.sendStatus(404);
    }
});
/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    const deleted = yield productsRepository.deleteProduct(productId);
    if (deleted.deletedRows) {
        res.sendStatus(204);
    }
    else {
        res.sendStatus(404);
    }
});
module.exports = {
    listProducts,
    readProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};
