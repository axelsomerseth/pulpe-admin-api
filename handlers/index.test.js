const express = require("express");

jest.mock("express");

describe("index handler", () => {
  test("should return welcome message", () => {
    const { indexHandler } = require("./index");
    const req = express.request;
    const res = express.response;
    indexHandler(req, res);

    expect(res.send).toHaveBeenCalled();
    expect(res.statusCode).toEqual(200);
  });
});
