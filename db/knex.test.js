const config = require("../knexfile");
const knex = require("knex");

jest.mock("knex");

describe("knex connection", () => {
  test("should be successful", () => {
    // act
    const connection = knex(config["development"]);

    // assert
    expect(connection).toBeDefined();
    expect(connection).toHaveProperty("context");
    expect(connection).toHaveProperty("select");
    expect(connection).toHaveProperty("insert");
    expect(connection).toHaveProperty("update");
    expect(connection).toHaveProperty("del");
  });
});
