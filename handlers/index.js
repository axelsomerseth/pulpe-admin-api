const indexHandler = (req, res, next) => {
  res.end(`Welcome to Inventory App.`);
};

module.exports = {
  indexHandler,
};
