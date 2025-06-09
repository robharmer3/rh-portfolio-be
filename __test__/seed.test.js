const db = require("../db/connection.js");
const seed = require("../db/seeds/seed");
const data = require("../db/data/test-data/index.js");

beforeAll(() => seed(data));
afterAll(() => db.end());

describe("Seed", () => {
  describe("Project Table", () => {
    test("Does Project Table Exist", () => {
      return db
        .query(
          `SELECT EXISTS (
        SELECT FROM 
            information_schema.tables
        WHERE
            table_name = 'projects');`
        )
        .then(({ rows: [{ exists }] }) => {
          expect(exists).toBe(true);
        });
    });
  });
});
