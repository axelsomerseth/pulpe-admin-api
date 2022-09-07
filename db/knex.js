const environment = process.env.NODE_ENV || "development";
const pg = require("knex");
const config = require("../knexfile")[environment];

const connection = pg(config);

module.exports = connection;
