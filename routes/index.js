const express = require("express");
const router = express.Router();
const { indexHandler } = require("../handlers/index");

router.get("/", indexHandler);

module.exports = router;
