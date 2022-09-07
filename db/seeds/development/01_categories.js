/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("categories").del();
  await knex("categories").insert([
    {
      id: 1,
      name: "Bebidas Alcoholicas",
      description: "Cervezas Licores y Vinos",
      created_at: new Date(),
    },
    {
      id: 2,
      name: "Bebidas y Jugos",
      description: "Aguas, Bebidas Refrescantes, Jugos, Refrescos",
      created_at: new Date(),
    },
    {
      id: 3,
      name: "Abarrotes",
      description: "",
      created_at: new Date(),
    },
    {
      id: 4,
      name: "Embutidos",
      description: "",
      created_at: new Date(),
    },
    {
      id: 5,
      name: "Lácteos",
      description: "Lácteos no Lácteos Derivados y Huevos",
      created_at: new Date(),
    },
    {
      id: 6,
      name: "Frutas y Verduras",
      description: "",
      created_at: new Date(),
    },
    {
      id: 7,
      name: "Carnes y Aves",
      description: "",
      created_at: new Date(),
    },
    {
      id: 8,
      name: "Pescados y Mariscos",
      description: "",
      created_at: new Date(),
    },
    {
      id: 9,
      name: "Panadería y Tortillas",
      description: "",
      created_at: new Date(),
    },
  ]);
};
