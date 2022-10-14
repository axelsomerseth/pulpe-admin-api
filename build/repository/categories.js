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
const knex = require("../db/knex");
const TABLE_NAME = "categories";
const listCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield knex.select().from(TABLE_NAME).orderBy("id", "asc");
});
/**
 * @param {number} categoryId
 * @returns {[]}
 */
const getCategoryById = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield knex.select().from(TABLE_NAME).where("id", categoryId);
});
const addCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    return yield knex
        .returning(["id", "name", "description", "created_at", "updated_at"])
        .insert({
        name: category.name,
        description: category.description,
        created_at: category.created_at || new Date(),
    })
        .into(TABLE_NAME);
});
const editCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    return yield knex
        .returning(["id", "name", "description", "created_at", "updated_at"])
        .where({ id: category.id })
        .update({
        name: category.name,
        description: category.description,
        updated_at: category.updated_at || new Date(),
    })
        .from(TABLE_NAME);
});
const deleteCategory = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedRows = yield knex
        .where({ id: categoryId })
        .del()
        .from(TABLE_NAME);
    return { deletedRows };
});
module.exports = {
    listCategories,
    getCategoryById,
    addCategory,
    editCategory,
    deleteCategory,
};
