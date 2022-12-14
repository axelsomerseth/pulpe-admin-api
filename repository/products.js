const knex = require("../db/knex");

const TABLE_NAME = "products";

const listProducts = async () => {
  return await knex
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
};

const searchForProducts = async (search) => {
  return await knex
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
};

const getProductById = async (productId) => {
  return await knex.select().from(TABLE_NAME).where("id", productId);
};

const addProduct = async (product) => {
  return await knex
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
};

const editProduct = async (product) => {
  return await knex
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
};

const deleteProduct = async (productId) => {
  const deletedRows = await knex
    .del()
    .from(TABLE_NAME)
    .where({ id: productId });
  return { deletedRows };
};

module.exports = {
  listProducts,
  searchForProducts,
  getProductById,
  addProduct,
  editProduct,
  deleteProduct,
};
