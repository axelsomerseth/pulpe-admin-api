// import path from "path";
import express, { Express } from "express";
import cors from "cors";
import logger from "morgan";
import compression from "compression";
// import helmet from "helmet";
// import { engine } from "express-handlebars";

// import routes
import indexRouter from "./routes/index";
// const productsRouter = require("./routes/products");
// const categoriesRouter = require("./routes/categories");
// const viewsRouter = require("./routes/views");

const app: Express = express();

// custom middleware
// const requestTime = require("./middlewares/requestTime");
// app.use(requestTime);

// middleware (goes first than routes)
app.use(logger("dev"));
app.use(cors()); // enable All CORS Requests
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(compression()); // 3rd party plugin: compresses all the responses
// app.use(helmet()); // 3rd party plugin: secure your Express apps by setting various HTTP headers

// define routes
app.use("/", indexRouter);
// app.use("/products", productsRouter);
// app.use("/categories", categoriesRouter);

// static files
// app.use("/static", express.static(path.join(__dirname, "public")));

// view/template engine
// app.engine("handlebars", engine());
// app.set("view engine", "handlebars");
// app.set("views", path.join(__dirname, "views"));
// app.enable("view cache");

// app.use("/views", viewsRouter);

export default app;
