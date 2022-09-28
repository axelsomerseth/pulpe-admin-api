const express = require("express");
const knex = require("knex");
const httpMocks = require("node-mocks-http");

jest.mock("express");
jest.mock("knex");

describe("categories handler", () => {
  test("should return a list of categories successfully", async () => {
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
    await listCategories(req, res);

    // assert
    expect(res.statusCode).toEqual(200);
    expect(res._getData()).toBeDefined();
  });

  test("should create a category successfully", async () => {
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
    await createCategory(req, res);

    // assert
    expect(res.statusCode).toEqual(201);
    expect(res._getData()).toBeDefined();
  });

  test.todo("should read a category successfully");

  test.todo("should update a category successfully");

  test.todo("should delete a category successfully");
});
