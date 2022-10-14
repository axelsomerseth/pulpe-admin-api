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
  return await knex
    .returning(["id", "name", "description", "created_at", "updated_at"])
    .insert({
      name: category.name,
      description: category.description,
      created_at: category.created_at || new Date(),
    })
    .into(TABLE_NAME);
};

const editCategory = async (category) => {
  return await knex
    .returning(["id", "name", "description", "created_at", "updated_at"])
    .where({ id: category.id })
    .update({
      name: category.name,
      description: category.description,
      updated_at: category.updated_at || new Date(),
    })
    .from(TABLE_NAME);
};

const deleteCategory = async (categoryId) => {
  const deletedRows = await knex
    .where({ id: categoryId })
    .del()
    .from(TABLE_NAME);
  return { deletedRows };
};

module.exports = {
  listCategories,
  getCategoryById,
  addCategory,
  editCategory,
  deleteCategory,
};
