const path = require("path");
require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: process.env.PG_CONNECTION_STRING,
    migrations: {
      directory: path.resolve(__dirname + "/db/migrations"),
    },
    seeds: {
      directory: path.resolve(__dirname + "/db/seeds/development"),
    },
  },
  production: {
    client: "pg",
    connection: process.env.PG_CONNECTION_STRING,
    migrations: {
      directory: path.resolve(__dirname + "/db/migrations"),
    },
    seeds: {
      directory: path.resolve(__dirname + "/db/seeds/production"),
    },
  },
};
