/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries.
  await knex("categories").del();
  // Add new entries.
  await knex("categories").insert([
    {
      name: "Bebidas Alcoholicas",
      description: "Cervezas Licores y Vinos",
      created_at: new Date(),
    },
    {
      name: "Bebidas y Jugos",
      description: "Aguas, Bebidas Refrescantes, Jugos, Refrescos",
      created_at: new Date(),
    },
    {
      name: "Abarrotes",
      description: "",
      created_at: new Date(),
    },
    {
      name: "Embutidos",
      description: "",
      created_at: new Date(),
    },
    {
      name: "Lácteos",
      description: "Lácteos no Lácteos Derivados y Huevos",
      created_at: new Date(),
    },
    {
      name: "Frutas y Verduras",
      description: "",
      created_at: new Date(),
    },
    {
      name: "Carnes y Aves",
      description: "",
      created_at: new Date(),
    },
    {
      name: "Pescados y Mariscos",
      description: "",
      created_at: new Date(),
    },
    {
      name: "Panadería y Tortillas",
      description: "",
      created_at: new Date(),
    },
  ]);
};
