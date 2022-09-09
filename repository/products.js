const knex = require("../db/knex");

const TABLE_NAME = "products";

const listProducts = async () => {
  return await knex
    .select([
      "products.id",
      "products.name",
      "products.description",
      // "products.category_id",
      { category: "categories.name" },
      "products.price",
      "products.stock",
      "products.created_at",
      "products.updated_at",
    ])
    .from(TABLE_NAME)
    .innerJoin("categories", "categories.id", "products.category_id")
    .orderBy("products.id", "asc");
};

const getProductById = async (productId) => {
  return await knex.select().from(TABLE_NAME).where("id", productId);
};

const addProduct = async (product) => {
  return await knex(TABLE_NAME)
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
      category_id: product.categoryId,
      price: product.price,
      stock: product.stock,
      created_at: new Date(),
    });
};

const editProduct = async (product) => {
  return await knex(TABLE_NAME)
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
    .where({ id: product.id })
    .update({
      name: product.name,
      description: product.description,
      category_id: product.categoryId,
      price: product.price,
      stock: product.stock,
      updated_at: new Date(),
    });
};

const deleteProduct = async (productId) => {
  const deletedRows = await knex(TABLE_NAME).where({ id: productId }).del();
  return { deletedRows };
};

module.exports = {
  listProducts,
  getProductById,
  addProduct,
  editProduct,
  deleteProduct,
};
