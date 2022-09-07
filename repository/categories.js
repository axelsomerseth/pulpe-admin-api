const knex = require("../db/knex");
const TABLE_NAME = "categories";

const listCategories = async () => {
  return await knex.select().from(TABLE_NAME).orderBy("id", "asc");
};

/**
 * @param {number} categoryId
 * @returns {[]}
 */
const getCategoryById = async (categoryId) => {
  return await knex.select().from(TABLE_NAME).where("id", categoryId);
};

const addCategory = async (category) => {
  return await knex(TABLE_NAME)
    .returning(["id", "name", "description", "created_at", "updated_at"])
    .insert({
      name: category.name,
      description: category.description,
      created_at: new Date(),
      updated_at: new Date(),
    });
};

const editCategory = async (category) => {
  return await knex(TABLE_NAME)
    .returning(["id", "name", "description", "created_at", "updated_at"])
    .where({ id: category.id })
    .update({
      name: category.name,
      description: category.description,
      updated_at: new Date(),
    });
};

const deleteCategory = async (categoryId) => {
  const deletedRows = await knex(TABLE_NAME).where({ id: categoryId }).del();
  return { deletedRows };
};

module.exports = {
  listCategories,
  getCategoryById,
  addCategory,
  editCategory,
  deleteCategory,
};
