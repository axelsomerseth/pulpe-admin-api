const path = require("path");
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const { engine } = require("express-handlebars");

// import routes
const indexRouter = require("./routes/index");
const productsRouter = require("./routes/products");
const categoriesRouter = require("./routes/categories");
const viewsRouter = require("./routes/views");

const app = express();

// custom middleware
const requestTime = require("./middlewares/requestTime");
app.use(requestTime);

// middleware (goes first than routes)
app.use(logger("dev"));
app.use(cors()); // enable All CORS Requests
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

// define routes
app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

// static files
app.use("/static", express.static(path.join(__dirname, "public")));

// view/template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
// app.enable("view cache");

app.use("/views", viewsRouter);

module.exports = app;
