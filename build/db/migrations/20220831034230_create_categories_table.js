"use strict";
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("categories", function (table) {
        table.increments("id");
        table.string("name", 60).notNullable();
        table.string("description", 255);
        table.timestamp("created_at", { useTz: true });
        table.timestamp("updated_at", { useTz: true });
        table.timestamp("deleted_at", { useTz: true });
    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("categories");
};
