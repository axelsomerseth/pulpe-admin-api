"use strict";
/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const indexHandler = (req, res, next) => {
    res.send(`Welcome to Pulpe Admin REST API.`);
};
module.exports = {
    indexHandler,
};
