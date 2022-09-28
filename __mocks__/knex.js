const knex = jest.createMockFromModule("knex");

let querybuilder = {
  select: jest.fn().mockReturnThis(),
  innerJoin: jest.fn().mockReturnThis(),
  from: jest.fn().mockReturnThis(),
  where: jest.fn().mockReturnThis(),
  orderBy: jest.fn().mockReturnThis(),
  insert: jest.fn().mockReturnThis(),
  into: jest.fn().mockReturnThis(),
  update: jest.fn().mockReturnThis(),
  del: jest.fn().mockReturnThis(),
  as: jest.fn().mockReturnThis(),
  returning: jest.fn().mockReturnThis(),
  toSQL: jest.fn().mockReturnThis(),
  toNative: jest.fn(),
  debug: jest.fn().mockReturnThis(),
  connection: jest.fn().mockReturnThis(),
  context: jest.fn().mockResolvedValue({ client: { driver: {}, pool: {} } }),
  length: jest.fn().mockResolvedValue(1),
};

const knexMock = jest.fn().mockReturnValue(querybuilder);
knex.mockImplementation(knexMock);

module.exports = knex;
