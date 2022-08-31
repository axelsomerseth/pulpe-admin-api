const express = require("express");
const cors = require("cors");
const logger = require("morgan");

// import routes
const indexRouter = require("./routes/index");
const itemsRouter = require("./routes/items");
const categoriesRouter = require("./routes/categories");
const requestTime = require("./middlewares/requestTime");

const app = express();

// custom middleware
app.use(requestTime);

// middleware (goes first than routes)
app.use(logger("dev"));
app.use(cors()); // enable All CORS Requests
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

// define routes
app.use("/", indexRouter);
app.use("/items", itemsRouter);
app.use("/categories", categoriesRouter);

module.exports = app;
