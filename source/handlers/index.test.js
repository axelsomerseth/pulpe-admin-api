const express = require("express");
const httpMocks = require("node-mocks-http");

jest.mock("express");

describe("index handler", () => {
  test("should return welcome message", () => {
    // arrange
    const { indexHandler } = require("./index");
    const req = httpMocks.createRequest({ method: "GET" });
    const res = httpMocks.createResponse();

    // act
    indexHandler(req, res);

    // assert
    expect(res.statusCode).toEqual(200);
    expect(res._getData()).toContain("Welcome to Pulpe Admin REST API.");
  });
});
