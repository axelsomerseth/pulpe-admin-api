const environment = process.env.NODE_ENV || "development";
const config = require("../knexfile");
const knex = require("knex");

const connection = knex(config[environment]);

module.exports = connection;
