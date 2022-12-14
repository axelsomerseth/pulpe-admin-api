const httpMocks = require("node-mocks-http");

jest.mock("express");
jest.mock("knex");

describe("categories handler", () => {
  test("listCategories should respond correctly", async () => {
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

  test("createCategory should respond correctly", async () => {
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
    const responseBody = res._getData();

    // assert
    expect(res.statusCode).toEqual(201);
    expect(responseBody).toBeDefined();
    expect(responseBody.fakeID).toEqual(1);
  });

  test("readCategory should respond correctly", async () => {
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
    await readCategory(req, res);
    const responseBody = res._getData();

    // assert
    expect(res.statusCode).toEqual(200);
    expect(responseBody).toBeDefined();
    expect(responseBody.fakeID).toEqual(1);
  });

  test("updateCategory should respond correctly", async () => {
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
    await updateCategory(req, res);
    const responseBody = res._getData();

    // assert
    expect(res.statusCode).toEqual(200);
    expect(responseBody).toBeDefined();
  });

  test("deleteCategory should respond correctly", async () => {
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
    await deleteCategory(req, res);

    // assert
    expect(res.statusCode).toEqual(204);
  });
});
