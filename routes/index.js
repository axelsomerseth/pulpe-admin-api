const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.debug(new Date(req.requestTime).toString());
  res.end(`Welcome to Inventory App.`);
});

module.exports = router;
