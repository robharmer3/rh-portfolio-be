const db = require("../db/connection.js");
const seed = require("../db/seeds/seed");
const data = require("../db/data/test-data/index.js");

beforeAll(() => seed(data));
afterAll(() => db.end());

describe("Table Creation", () => {
  describe("Project Table", () => {
    test("Exists", () => {
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
    test("ID Column", () => {
      return db
        .query(
          `SELECT * 
        FROM information_schema.columns
        WHERE table_name = 'projects'
        AND column_name = 'project_id';`
        )
        .then(({ rows: [column] }) => {
          expect(column.column_name).toBe("project_id");
          expect(column.data_type).toBe("integer");
        });
    });
    test("Title Column", () => {
      return db
        .query(
          `SELECT * 
        FROM information_schema.columns
        WHERE table_name = 'projects'
        AND column_name = 'title';`
        )
        .then(({ rows: [column] }) => {
          expect(column.column_name).toBe("title");
          expect(column.data_type).toBe("character varying");
        });
    });
    test("Description Column", () => {
      return db
        .query(
          `SELECT * 
        FROM information_schema.columns
        WHERE table_name = 'projects'
        AND column_name = 'description';`
        )
        .then(({ rows: [column] }) => {
          expect(column.column_name).toBe("description");
          expect(column.data_type).toBe("character varying");
        });
    });
    test("Category Column", () => {
      return db
        .query(
          `SELECT * 
        FROM information_schema.columns
        WHERE table_name = 'projects'
        AND column_name = 'category';`
        )
        .then(({ rows: [column] }) => {
          expect(column.column_name).toBe("category");
          expect(column.data_type).toBe("character varying");
        });
    });
    test("Avatar Column", () => {
      return db
        .query(
          `SELECT * 
        FROM information_schema.columns
        WHERE table_name = 'projects'
        AND column_name = 'avatar_url';`
        )
        .then(({ rows: [column] }) => {
          expect(column.column_name).toBe("avatar_url");
          expect(column.data_type).toBe("character varying");
        });
    });
  });
  describe("Category Table", () => {
    test("Exists", () => {
      return db
        .query(
          `SELECT EXISTS (
        SELECT FROM 
            information_schema.tables
        WHERE
            table_name = 'categories');`
        )
        .then(({ rows: [{ exists }] }) => {
          expect(exists).toBe(true);
        });
    });
    test("ID Column", () => {
      return db
        .query(
          `SELECT * 
        FROM information_schema.columns
        WHERE table_name = 'categories'
        AND column_name = 'category_id';`
        )
        .then(({ rows: [column] }) => {
          expect(column.column_name).toBe("category_id");
          expect(column.data_type).toBe("integer");
        });
    });
    test("Title Column", () => {
      return db
        .query(
          `SELECT * 
        FROM information_schema.columns
        WHERE table_name = 'categories'
        AND column_name = 'title';`
        )
        .then(({ rows: [column] }) => {
          expect(column.column_name).toBe("title");
          expect(column.data_type).toBe("character varying");
        });
    });
    test("Description Column", () => {
      return db
        .query(
          `SELECT * 
        FROM information_schema.columns
        WHERE table_name = 'categories'
        AND column_name = 'description';`
        )
        .then(({ rows: [column] }) => {
          expect(column.column_name).toBe("description");
          expect(column.data_type).toBe("character varying");
        });
    });
  });
});

describe("Data Insertion", () => {
  test("Project Data has been inserted correctly", () => {
    return db.query(`SELECT * FROM projects;`).then(({ rows: projects }) => {
      expect(projects).toHaveLength(4);
      projects.forEach((project) => {
        expect(project).toHaveProperty("project_id");
        expect(project).toHaveProperty("title");
        expect(project).toHaveProperty("description");
        expect(project).toHaveProperty("category");
        expect(project).toHaveProperty("avatar_url");
      });
    });
  });
  test("Cateogories Data has been inserted correctly", () => {
    return db
      .query(`SELECT * FROM categories;`)
      .then(({ rows: categories }) => {
        expect(categories).toHaveLength(2);
        categories.forEach((category) => {
          expect(category).toHaveProperty("title");
          expect(category).toHaveProperty("description");
        });
      });
  });
});
