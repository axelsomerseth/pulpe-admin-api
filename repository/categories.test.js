jest.mock("knex");

// Docs: https://jestjs.io/docs/bypassing-module-mocks

describe("categories repository", () => {
  beforeAll(() => {
    require("knex");
  });

  test("should list categories", async () => {
    // arrange

    // act
    const categoryRepo = require("./categories");
    const querybuilder = await categoryRepo.listCategories();

    // assert
    expect(querybuilder.select).toHaveBeenCalledTimes(1);
    expect(querybuilder.from).toHaveBeenCalledWith("categories");
    expect(querybuilder.orderBy).toHaveBeenCalledWith("id", "asc");
  });

  test("should get a category by id", async () => {
    // arrange
    const categoryId = Math.floor(Math.random() * 99) + 1;

    // act
    const categoryRepo = require("./categories");
    const querybuilder = await categoryRepo.getCategoryById(categoryId);

    // assert
    expect(querybuilder.select).toHaveBeenCalledTimes(1);
    expect(querybuilder.from).toHaveBeenCalledWith("categories");
    expect(querybuilder.where).toHaveBeenCalledWith("id", categoryId);
  });

  test("should add a category", async () => {
    // arrange
    const category = {
      name: "Test name",
      description: "Test description",
      created_at: new Date(),
    };

    // act
    const categoryRepo = require("./categories");
    const querybuilder = await categoryRepo.addCategory(category);

    // assert
    expect(querybuilder.returning).toHaveBeenCalledWith([
      "id",
      "name",
      "description",
      "created_at",
      "updated_at",
    ]);
    expect(querybuilder.insert).toHaveBeenCalledWith(category);
    expect(querybuilder.into).toHaveBeenCalledWith("categories");
  });

  test("should edit a category", async () => {
    // arrange
    const categoryId = Math.floor(Math.random() * 99) + 1;
    const category = {
      name: "Test name",
      description: "Test description",
      updated_at: new Date(),
    };

    // act
    const categoryRepo = require("./categories");
    const querybuilder = await categoryRepo.editCategory({
      id: categoryId,
      ...category,
    });

    // assert
    expect(querybuilder.returning).toHaveBeenCalledWith([
      "id",
      "name",
      "description",
      "created_at",
      "updated_at",
    ]);
    expect(querybuilder.where).toHaveBeenCalledWith({ id: categoryId });
    expect(querybuilder.update).toHaveBeenCalledWith(category);
    expect(querybuilder.from).toHaveBeenCalledWith("categories");
  });

  test("should remove a category", async () => {
    // arrange
    const categoryId = Math.floor(Math.random() * 99) + 1;

    // act
    const categoryRepo = require("./categories");
    const querybuilder = await categoryRepo.deleteCategory(categoryId);

    // assert
    expect(querybuilder.deletedRows).toBeDefined();
    expect(querybuilder.deletedRows.del).toHaveBeenCalled();
    expect(querybuilder.deletedRows.where).toHaveBeenCalledWith({
      id: categoryId,
    });
  });
});
