"use strict";
/**
 * RequestTime Middleware: adds an attribute to the resquest called "requestTime",
 * which contains the date and time when the request was received by the server.
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
};
module.exports = requestTime;
