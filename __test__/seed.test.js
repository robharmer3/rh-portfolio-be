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
          expect(column.data_type).toBe("integer");
        });
    });
    test("Link Column", () => {
      return db
        .query(
          `SELECT * 
        FROM information_schema.columns
        WHERE table_name = 'projects'
        AND column_name = 'link';`
        )
        .then(({ rows: [column] }) => {
          expect(column.column_name).toBe("link");
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
  describe("Project Category Table", () => {
    test("Exists", () => {
      return db
        .query(
          `SELECT EXISTS (
        SELECT FROM 
            information_schema.tables
        WHERE
            table_name = 'project_categories');`
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
        WHERE table_name = 'project_categories'
        AND column_name = 'project_category_id';`
        )
        .then(({ rows: [column] }) => {
          expect(column.column_name).toBe("project_category_id");
          expect(column.data_type).toBe("integer");
        });
    });
    test("Title Column", () => {
      return db
        .query(
          `SELECT * 
        FROM information_schema.columns
        WHERE table_name = 'project_categories'
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
        WHERE table_name = 'project_categories'
        AND column_name = 'description';`
        )
        .then(({ rows: [column] }) => {
          expect(column.column_name).toBe("description");
          expect(column.data_type).toBe("character varying");
        });
    });
  });
  describe("Skills Table", () => {
    test("Exists", () => {
      return db
        .query(
          `SELECT EXISTS (
        SELECT FROM 
            information_schema.tables
        WHERE
            table_name = 'skills');`
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
        WHERE table_name = 'skills'
        AND column_name = 'skill_id';`
        )
        .then(({ rows: [column] }) => {
          expect(column.column_name).toBe("skill_id");
          expect(column.data_type).toBe("integer");
        });
    });
    test("Title Column", () => {
      return db
        .query(
          `SELECT * 
        FROM information_schema.columns
        WHERE table_name = 'skills'
        AND column_name = 'title';`
        )
        .then(({ rows: [column] }) => {
          expect(column.column_name).toBe("title");
          expect(column.data_type).toBe("character varying");
        });
    });
    test("Cateogry Column", () => {
      return db
        .query(
          `SELECT * 
        FROM information_schema.columns
        WHERE table_name = 'skills'
        AND column_name = 'category';`
        )
        .then(({ rows: [column] }) => {
          expect(column.column_name).toBe("category");
          expect(column.data_type).toBe("integer");
        });
    });
  });
  describe("Skills Category Table", () => {
    test("Exists", () => {
      return db
        .query(
          `SELECT EXISTS (
        SELECT FROM 
            information_schema.tables
        WHERE
            table_name = 'skill_categories');`
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
        WHERE table_name = 'skill_categories'
        AND column_name = 'skill_category_id';`
        )
        .then(({ rows: [column] }) => {
          expect(column.column_name).toBe("skill_category_id");
          expect(column.data_type).toBe("integer");
        });
    });
    test("Title Column", () => {
      return db
        .query(
          `SELECT * 
        FROM information_schema.columns
        WHERE table_name = 'skill_categories'
        AND column_name = 'title';`
        )
        .then(({ rows: [column] }) => {
          expect(column.column_name).toBe("title");
          expect(column.data_type).toBe("character varying");
        });
    });
  });
});

describe("Data Insertion", () => {
  test("Project Data has been inserted correctly", () => {
    return db.query(`SELECT * FROM projects;`).then(({ rows: projects }) => {
      expect(projects).toHaveLength(5);
      projects.forEach((project) => {
        expect(project).toHaveProperty("project_id");
        expect(project).toHaveProperty("title");
        expect(project).toHaveProperty("description");
        expect(project).toHaveProperty("category");
        expect(project).toHaveProperty("link");
        expect(project).toHaveProperty("avatar_url");
      });
    });
  });
  test("Project Cateogories Data has been inserted correctly", () => {
    return db
      .query(`SELECT * FROM project_categories;`)
      .then(({ rows: categories }) => {
        expect(categories).toHaveLength(3);
        categories.forEach((category) => {
          expect(category).toHaveProperty("title");
          expect(category).toHaveProperty("description");
        });
      });
  });
  test("Skills Data has been inserted correctly", () => {
    return db.query(`SELECT * FROM skills;`).then(({ rows: skills }) => {
      expect(skills).toHaveLength(27);
      skills.forEach((skill) => {
        expect(skill).toHaveProperty("title");
        expect(skill).toHaveProperty("category");
      });
    });
  });
});
