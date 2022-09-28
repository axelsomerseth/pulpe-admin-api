const express = require("express");

jest.mock("express");

describe("index handler", () => {
  test("should return welcome message", () => {
    // arrange
    const { indexHandler } = require("./index");
    const req = express.request;
    const res = express.response;

    // act
    indexHandler(req, res);

    // assert
    expect(res.send).toHaveBeenCalled();
    expect(res.statusCode).toEqual(200);
  });
});
