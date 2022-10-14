jest.mock("knex");

// Docs: https://jestjs.io/docs/bypassing-module-mocks

describe("products repository", () => {
  beforeAll(() => {
    require("knex");
  });

  test("should list products", async () => {
    // arrange

    // act
    const { listProducts } = require("./products");
    const querybuilder = await listProducts();

    // assert
    expect(querybuilder.select).toHaveBeenCalledTimes(1);
    expect(querybuilder.from).toHaveBeenCalledWith("products");
    expect(querybuilder.orderBy).toHaveBeenCalledWith("products.id", "asc");
  });

  test("should get a product by id", async () => {
    // arrange
    const productId = Math.floor(Math.random() * 99) + 1;

    // act
    const { getProductById } = require("./products");
    const querybuilder = await getProductById(productId);

    // assert
    expect(querybuilder.select).toHaveBeenCalledTimes(1);
    expect(querybuilder.from).toHaveBeenCalledWith("products");
    expect(querybuilder.where).toHaveBeenCalledWith("id", productId);
  });

  test("should add a product", async () => {
    // arrange
    const product = {
      name: "Corona 12 fl. oz.",
      description:
        "It is often served with a wedge of lime or lemon in the neck of the bottle to add tartness and flavor.",
      category_id: 1,
      price: 30.0,
      stock: 24,
      created_at: new Date(),
    };

    // act
    const { addProduct } = require("./products");
    const querybuilder = await addProduct(product);

    // assert
    expect(querybuilder.returning).toHaveBeenCalledWith([
      "id",
      "name",
      "description",
      "category_id",
      "price",
      "stock",
      "created_at",
      "updated_at",
    ]);
    expect(querybuilder.insert).toHaveBeenCalledWith({
      name: product.name,
      description: product.description,
      category_id: product.category_id,
      price: product.price,
      stock: product.stock,
      created_at: product.created_at,
    });
    expect(querybuilder.into).toHaveBeenCalledWith("products");
  });

  test("should edit a product", async () => {
    // arrange
    const productId = Math.floor(Math.random() * 99) + 1;
    const product = {
      name: "Corona 12 fl. oz.",
      description:
        "It is often served with a wedge of lime or lemon in the neck of the bottle to add tartness and flavor.",
      category_id: 1,
      price: 30.0,
      stock: 24,
      updated_at: new Date(),
    };

    // act
    const { editProduct } = require("./products");
    const querybuilder = await editProduct({ id: productId, ...product });

    // assert
    expect(querybuilder.returning).toHaveBeenCalledWith([
      "id",
      "name",
      "description",
      "category_id",
      "price",
      "stock",
      "created_at",
      "updated_at",
    ]);
    expect(querybuilder.update).toHaveBeenCalledWith({
      name: product.name,
      description: product.description,
      category_id: product.category_id,
      price: product.price,
      stock: product.stock,
      updated_at: product.updated_at,
    });
    expect(querybuilder.from).toHaveBeenCalledWith("products");
    expect(querybuilder.where).toHaveBeenCalledWith({ id: productId });
  });

  test("should remove a product", async () => {
    // arrange
    const productId = Math.floor(Math.random() * 99) + 1;

    // act
    const { deleteProduct } = require("./products");
    const querybuilder = await deleteProduct(productId);

    // assert
    expect(querybuilder.deletedRows).toBeDefined();
    expect(querybuilder.deletedRows.del).toHaveBeenCalled();
    expect(querybuilder.deletedRows.where).toHaveBeenCalledWith({
      id: productId,
    });
  });
});
