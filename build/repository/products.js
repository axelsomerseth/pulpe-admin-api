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
const TABLE_NAME = "products";
const listProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield knex
        .select([
        "products.id",
        "products.name",
        "products.description",
        "products.price",
        "products.stock",
        "products.category_id",
        // { category: "categories.name" },
        "products.created_at",
        "products.updated_at",
    ])
        .from(TABLE_NAME)
        .innerJoin("categories", "categories.id", "products.category_id")
        .orderBy("products.id", "asc");
});
const searchForProducts = (search) => __awaiter(void 0, void 0, void 0, function* () {
    return yield knex
        .select([
        "products.id",
        "products.name",
        "products.description",
        "products.price",
        "products.stock",
        "products.category_id",
        // { category: "categories.name" },
        "products.created_at",
        "products.updated_at",
    ])
        .from(TABLE_NAME)
        .innerJoin("categories", "categories.id", "products.category_id")
        .orderBy("products.id", "asc")
        .whereILike("products.name", `%${search}%`);
});
const getProductById = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield knex.select().from(TABLE_NAME).where("id", productId);
});
const addProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    return yield knex
        .returning([
        "id",
        "name",
        "description",
        "category_id",
        "price",
        "stock",
        "created_at",
        "updated_at",
    ])
        .insert({
        name: product.name,
        description: product.description,
        category_id: product.category_id,
        price: product.price,
        stock: product.stock,
        created_at: product.created_at || new Date(),
    })
        .into(TABLE_NAME);
});
const editProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    return yield knex
        .returning([
        "id",
        "name",
        "description",
        "category_id",
        "price",
        "stock",
        "created_at",
        "updated_at",
    ])
        .update({
        name: product.name,
        description: product.description,
        category_id: product.category_id,
        price: product.price,
        stock: product.stock,
        updated_at: product.updated_at || new Date(),
    })
        .from(TABLE_NAME)
        .where({ id: product.id });
});
const deleteProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedRows = yield knex
        .del()
        .from(TABLE_NAME)
        .where({ id: productId });
    return { deletedRows };
});
module.exports = {
    listProducts,
    searchForProducts,
    getProductById,
    addProduct,
    editProduct,
    deleteProduct,
};
