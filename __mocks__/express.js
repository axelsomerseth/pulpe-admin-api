const express = jest.createMockFromModule("express");

const returnValue = {};

const expressMock = jest.fn().mockReturnValue(returnValue);
express.mockImplementation(expressMock);

module.exports = express;
