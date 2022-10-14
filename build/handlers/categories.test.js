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
describe("categories handler", () => {
    test("listCategories should respond correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        // arrange
        const { listCategories } = require("./categories");
        const req = httpMocks.createRequest({
            method: "GET",
            query: {
                page: 1,
                size: 10,
            },
        });
        const res = httpMocks.createResponse();
        // act
        yield listCategories(req, res);
        // assert
        expect(res.statusCode).toEqual(200);
        expect(res._getData()).toBeDefined();
    }));
    test("createCategory should respond correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        // arrange
        const { createCategory } = require("./categories");
        const req = httpMocks.createRequest({
            method: "POST",
            body: {
                name: "Test name X",
                description: "Test description X",
            },
        });
        const res = httpMocks.createResponse();
        // act
        yield createCategory(req, res);
        const responseBody = res._getData();
        // assert
        expect(res.statusCode).toEqual(201);
        expect(responseBody).toBeDefined();
        expect(responseBody.fakeID).toEqual(1);
    }));
    test("readCategory should respond correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        // arrange
        const { readCategory } = require("./categories");
        const req = httpMocks.createRequest({
            method: "GET",
            params: {
                categoryId: 1,
            },
        });
        const res = httpMocks.createResponse();
        // act
        yield readCategory(req, res);
        const responseBody = res._getData();
        // assert
        expect(res.statusCode).toEqual(200);
        expect(responseBody).toBeDefined();
        expect(responseBody.fakeID).toEqual(1);
    }));
    test("updateCategory should respond correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        // arrange
        const { updateCategory } = require("./categories");
        const req = httpMocks.createRequest({
            method: "PUT",
            params: {
                categoryId: 1,
            },
            body: {
                name: "Mocked name",
                description: "Mocked description",
            },
        });
        const res = httpMocks.createResponse();
        // act
        yield updateCategory(req, res);
        const responseBody = res._getData();
        // assert
        expect(res.statusCode).toEqual(200);
        expect(responseBody).toBeDefined();
    }));
    test("deleteCategory should respond correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        // arrange
        const { deleteCategory } = require("./categories");
        const req = httpMocks.createRequest({
            method: "DELETE",
            params: {
                categoryId: 1,
            },
        });
        const res = httpMocks.createResponse();
        // act
        yield deleteCategory(req, res);
        // assert
        expect(res.statusCode).toEqual(204);
    }));
});
