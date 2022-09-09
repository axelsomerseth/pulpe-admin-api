const knex = jest.createMockFromModule("knex");

let querybuilder = {
  select: jest.fn().mockReturnThis(),
  from: jest.fn().mockReturnThis(),
  where: jest.fn().mockReturnThis(),
  orderBy: jest.fn().mockReturnThis(),
  insert: jest.fn().mockReturnThis(),
  into: jest.fn().mockReturnThis(),
  update: jest.fn().mockReturnThis(),
  del: jest.fn().mockReturnThis(),
  returning: jest.fn().mockReturnThis(),
  toSQL: jest.fn().mockReturnThis(),
  toNative: jest.fn(),
};

// console.log(querybuilder);

const knexMock = jest.fn().mockReturnValue(querybuilder);
knex.mockImplementation(knexMock);

module.exports = knex;
