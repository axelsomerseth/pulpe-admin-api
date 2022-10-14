const categoriesRepository = require("../repository/categories");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const viewsHandler = async (req, res, next) => {
  const list = await categoriesRepository.listCategories();
  res.render("home", {
    categories: list,
  });
};

module.exports = {
  viewsHandler,
};
