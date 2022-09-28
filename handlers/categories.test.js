const express = require("express");

jest.mock("express");
jest.mock("knex");

describe("categories handler", () => {
  test("should return a list of categories", async () => {
    // arrange
    const { listCategories } = require("./categories");
    const req = express.request;
    const res = express.response;
    // mocking/faking data in the request.
    req.query = {
      page: 1,
      size: 10,
    };

    // act
    await listCategories(req, res);

    // assert
    expect(res.send).toHaveBeenCalled();
    expect(res.statusCode).toEqual(200);
  });

  test.todo("should create a category");
  test.todo("should read a category");
  test.todo("should update a category");
  test.todo("should delete a category");
});
