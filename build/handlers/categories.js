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
const categoriesRepository = require("../repository/categories");
/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const listCategories = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const page = parseInt(req.query.page || 1);
    const size = parseInt(req.query.size || 10);
    const list = yield categoriesRepository.listCategories();
    res.send({
        page,
        size,
        data: list,
    });
});
/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const readCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = req.params.categoryId;
    const found = yield categoriesRepository.getCategoryById(categoryId);
    if (found.length) {
        res.status(200);
        res.send(found[0]);
    }
    else {
        res.sendStatus(404);
    }
});
/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newCategory = {
        name: req.body.name,
        description: req.body.description,
    };
    const created = yield categoriesRepository.addCategory(newCategory);
    if (created.length) {
        res.status(201);
        res.send(created[0]);
    }
    else {
        res.status(500);
        res.send();
    }
});
/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const editedCategory = Object.assign({ id: parseInt(req.params.categoryId) }, req.body);
    const updated = yield categoriesRepository.editCategory(editedCategory);
    if (updated.length) {
        res.status(200);
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
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = req.params.categoryId;
    const deleted = yield categoriesRepository.deleteCategory(categoryId);
    if (deleted.deletedRows) {
        res.sendStatus(204);
    }
    else {
        res.sendStatus(404);
    }
});
module.exports = {
    listCategories,
    readCategory,
    createCategory,
    updateCategory,
    deleteCategory,
};
