"use strict";
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        debug: true,
        client: "postgresql",
        connection: {
            connectionString: process.env.DATABASE_URL,
            // * NO SSL in development.
            // ssl: {
            //   rejectUnauthorized: false,
            // },
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
            directory: path.resolve(__dirname + "/db/migrations"),
        },
        seeds: {
            directory: path.resolve(__dirname + "/db/seeds/development"),
        },
    },
    production: {
        client: "postgresql",
        connection: {
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false,
            },
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
            directory: path.resolve(__dirname + "/db/migrations"),
        },
        seeds: {
            directory: path.resolve(__dirname + "/db/seeds/production"),
        },
    },
};
