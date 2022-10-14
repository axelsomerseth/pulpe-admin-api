"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
jest.mock("knex");
// Docs: https://jestjs.io/docs/bypassing-module-mocks
describe("categories repository", () => {
    beforeAll(() => {
        require("knex");
    });
    test("should list categories", () => __awaiter(void 0, void 0, void 0, function* () {
        // arrange
        // act
        const categoryRepo = require("./categories");
        const querybuilder = yield categoryRepo.listCategories();
        // assert
        expect(querybuilder.select).toHaveBeenCalledTimes(1);
        expect(querybuilder.from).toHaveBeenCalledWith("categories");
        expect(querybuilder.orderBy).toHaveBeenCalledWith("id", "asc");
    }));
    test("should get a category by id", () => __awaiter(void 0, void 0, void 0, function* () {
        // arrange
        const categoryId = Math.floor(Math.random() * 99) + 1;
        // act
        const categoryRepo = require("./categories");
        const querybuilder = yield categoryRepo.getCategoryById(categoryId);
        // assert
        expect(querybuilder.select).toHaveBeenCalledTimes(1);
        expect(querybuilder.from).toHaveBeenCalledWith("categories");
        expect(querybuilder.where).toHaveBeenCalledWith("id", categoryId);
    }));
    test("should add a category", () => __awaiter(void 0, void 0, void 0, function* () {
        // arrange
        const category = {
            name: "Test name",
            description: "Test description",
            created_at: new Date(),
        };
        // act
        const categoryRepo = require("./categories");
        const querybuilder = yield categoryRepo.addCategory(category);
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
    }));
    test("should edit a category", () => __awaiter(void 0, void 0, void 0, function* () {
        // arrange
        const categoryId = Math.floor(Math.random() * 99) + 1;
        const category = {
            name: "Test name",
            description: "Test description",
            updated_at: new Date(),
        };
        // act
        const categoryRepo = require("./categories");
        const querybuilder = yield categoryRepo.editCategory(Object.assign({ id: categoryId }, category));
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
    }));
    test("should remove a category", () => __awaiter(void 0, void 0, void 0, function* () {
        // arrange
        const categoryId = Math.floor(Math.random() * 99) + 1;
        // act
        const categoryRepo = require("./categories");
        const querybuilder = yield categoryRepo.deleteCategory(categoryId);
        // assert
        expect(querybuilder.deletedRows).toBeDefined();
        expect(querybuilder.deletedRows.del).toHaveBeenCalled();
        expect(querybuilder.deletedRows.where).toHaveBeenCalledWith({
            id: categoryId,
        });
    }));
});
