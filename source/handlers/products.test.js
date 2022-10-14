const httpMocks = require("node-mocks-http");

jest.mock("express");
jest.mock("knex");

describe("products handler", () => {
  test("listProducts should respond correctly", async () => {
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
    await listProducts(req, res);
    const responseBody = res._getData();

    // assert
    expect(res.statusCode).toEqual(200);
    expect(responseBody).toBeDefined();
  });

  test("readProduct should respond correctly", async () => {
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
    await readProduct(req, res);
    const responseBody = res._getData();

    // assert
    expect(res.statusCode).toEqual(200);
    expect(responseBody).toBeDefined();
  });

  test("createProduct should respond correctly", async () => {
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
    await createProduct(req, res);
    const responseBody = res._getData();

    // assert
    expect(res.statusCode).toEqual(200);
    expect(responseBody).toBeDefined();
  });

  test("updateProduct should respond correctly", async () => {
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
    await updateProduct(req, res);
    const responseBody = res._getData();

    // assert
    expect(res.statusCode).toEqual(200);
    expect(responseBody).toBeDefined();
  });

  test("deleteProduct should respond correctly", async () => {
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
    await deleteProduct(req, res);
    const responseBody = res._getData();

    // assert
    expect(res.statusCode).toEqual(204);
    expect(responseBody).toBeDefined();
  });
});
