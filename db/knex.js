const pg = require("knex");
const environment = process.env.NODE_ENV || "development";
const config = require("../knexfile")[environment];

// TODO: Remove this
console.log(config);

const connection = pg(config);

module.exports = connection;
