#!/usr/bin/env node
"use strict";
const http = require("http");
const application = require("./app");
const port = process.env.PORT || 3000;
application.set("port", port);
const server = http.createServer(application);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
function onError(error) {
    console.error(error);
    throw error;
}
function onListening() {
    var addr = server.address();
    var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    console.log("Listening on " + bind);
}
