"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletes ALL existing entries.
        yield knex("categories").del();
        // Add new entries.
        yield knex("categories").insert([
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
    });
};
