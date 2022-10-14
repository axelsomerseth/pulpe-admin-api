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
const httpMocks = require("node-mocks-http");
jest.mock("express");
jest.mock("knex");
describe("products handler", () => {
    test("listProducts should respond correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        // arrange
        const { listProducts } = require("./products");
        const req = httpMocks.createRequest({
            method: "GET",
            query: {
                page: 1,
                size: 10,
            },
        });
        const res = httpMocks.createResponse();
        // act
        yield listProducts(req, res);
        const responseBody = res._getData();
        // assert
        expect(res.statusCode).toEqual(200);
        expect(responseBody).toBeDefined();
    }));
    test("readProduct should respond correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        // arrange
        const { readProduct } = require("./products");
        const req = httpMocks.createRequest({
            method: "GET",
            query: {
                productId: 1,
            },
        });
        const res = httpMocks.createResponse();
        // act
        yield readProduct(req, res);
        const responseBody = res._getData();
        // assert
        expect(res.statusCode).toEqual(200);
        expect(responseBody).toBeDefined();
    }));
    test("createProduct should respond correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        // arrange
        const { createProduct } = require("./products");
        const req = httpMocks.createRequest({
            method: "POST",
            body: {
                name: "Test product name",
                description: "Test product description",
                price: 10,
                stock: 10,
                category_id: 1,
            },
        });
        const res = httpMocks.createResponse();
        // act
        yield createProduct(req, res);
        const responseBody = res._getData();
        // assert
        expect(res.statusCode).toEqual(200);
        expect(responseBody).toBeDefined();
    }));
    test("updateProduct should respond correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        // arrange
        const { updateProduct } = require("./products");
        const req = httpMocks.createRequest({
            method: "PUT",
            params: {
                productId: 1,
            },
            body: {
                name: "Test product name",
                description: "Test product description",
                price: 10,
                stock: 10,
                category_id: 1,
            },
        });
        const res = httpMocks.createResponse();
        // act
        yield updateProduct(req, res);
        const responseBody = res._getData();
        // assert
        expect(res.statusCode).toEqual(200);
        expect(responseBody).toBeDefined();
    }));
    test("deleteProduct should respond correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        // arrange
        const { deleteProduct } = require("./products");
        const req = httpMocks.createRequest({
            method: "DELETE",
            params: {
                productId: 1,
            },
        });
        const res = httpMocks.createResponse();
        // act
        yield deleteProduct(req, res);
        const responseBody = res._getData();
        // assert
        expect(res.statusCode).toEqual(204);
        expect(responseBody).toBeDefined();
    }));
});
