const express = require("express");

/**
 * RequestTime Middleware: adds an attribute to the resquest called "requestTime",
 * which contains the date and time when the request was received by the server.
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

module.exports = requestTime;
