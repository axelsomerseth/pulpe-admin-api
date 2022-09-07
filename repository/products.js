const knex = require("../db/knex");

const TABLE_NAME = "products";

const listProducts = async () => {
  return await knex.select().from(TABLE_NAME).orderBy("id", "asc");
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

const editProduct = async () => {};

const deleteProduct = async () => {};

module.exports = {
  listProducts,
  getProductById,
  addProduct,
  editProduct,
  deleteProduct,
};
