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
    },
    {
      id: 2,
      name: "Bebidas y Jugos",
      description: "Aguas, Bebidas Refrescantes, Jugos, Refrescos",
    },
    {
      id: 3,
      name: "Abarrotes",
      description: "",
    },
    {
      id: 4,
      name: "Embutidos",
      description: "",
    },
    {
      id: 5,
      name: "Lácteos",
      description: "Lácteos no Lácteos Derivados y Huevos",
    },
    {
      id: 6,
      name: "Frutas y Verduras",
      description: "",
    },
    {
      id: 7,
      name: "Carnes y Aves",
      description: "",
    },
    {
      id: 8,
      name: "Pescados y Mariscos",
      description: "",
    },
    {
      id: 9,
      name: "Panadería y Tortillas",
      description: "",
    },
  ]);
};
