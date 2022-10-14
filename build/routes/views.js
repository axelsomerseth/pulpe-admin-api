"use strict";
const express = require("express");
const router = express.Router();
const { viewsHandler } = require("../handlers/views");
router.get("/", viewsHandler);
module.exports = router;
