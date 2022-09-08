/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const indexHandler = (req, res, next) => {
  res.end(`Welcome to Inventory App.`);
};

module.exports = {
  indexHandler,
};
