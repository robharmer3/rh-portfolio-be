const request = require("supertest");
const endpointsJson = require("../endpoints.json");
const app = require("../app");
const seed = require("../db/seeds/seed");
const data = require("../db/data/test-data/index");
const db = require("../db/connection");

beforeEach(() => {
  return seed(data);
});

afterAll(() => {
  return db.end();
});

describe("GET /api", () => {
  test("200: Responds with an object detailing the documentation for each endpoint", () => {
    return request(app)
      .get("/api")
      .expect(200)
      .then(({ body: { endpoints } }) => {
        expect(endpoints).toEqual(endpointsJson);
      });
  });
});

describe("GET /api/categories", () => {
  describe("All Categories", () => {
    test("200: Responds with an array of all categories", () => {
      return request(app)
        .get("/api/categories")
        .expect(200)
        .then(({ body }) => {
          expect(Array.isArray(body.categories)).toBe(true);
        });
    });
    test("200: Each category should have a title and description properties", () => {
      return request(app)
        .get("/api/categories")
        .expect(200)
        .then(({ body }) => {
          body.categories.forEach((category) => {
            expect(category).toMatchObject({
              title: expect.any(String),
              description: expect.any(String),
            });
          });
        });
    });
    xtest("404: Responds with an 404 error message if endpoint is invalid", () => {
      return request(app)
        .get("/api/categorie")
        .expect(404)
        .then(({ body }) => {
          expect(body.msg).toBe("Page not found");
        });
    });
  });
  describe("Categories by ID", () => {
    test("200: Responds with category by given ID", () => {
      return request(app)
        .get("/api/categories/1")
        .expect(200)
        .then(({ body }) => {
          expect(body.category).toMatchObject({
            category_id: 1,
            title: "Northcoder",
            description: "Northcoder's final project",
          });
        });
    });
    test("404: Responds with error msg when given ID does not exisit", () => {
      return request(app)
        .get("/api/categories/999")
        .expect(404)
        .then(({ body }) => {
          expect(body.msg).toBe("Resource not found");
        });
    });
    test("400: Responds with error msg when given invalid ID", () => {
      return request(app)
        .get("/api/categories/smile")
        .expect(400)
        .then(({ body }) => {
          expect(body.msg).toBe("Bad Request, invalid input");
        });
    });
  });
});

describe("GET /api/projects", () => {
  describe("All Projects", () => {
    test("200: Responds with an array of all projects", () => {
      return request(app)
        .get("/api/projects")
        .expect(200)
        .then(({ body }) => {
          expect(Array.isArray(body.projects)).toBe(true);
        });
    });
    test("200: Each category should have a title and description properties", () => {
      return request(app)
        .get("/api/projects")
        .expect(200)
        .then(({ body }) => {
          body.projects.forEach((project) => {
            expect(project).toMatchObject({
              title: expect.any(String),
              category: expect.any(Number),
              description: expect.any(String),
              link: expect.any(String),
              avatar_url: expect.any(String),
            });
          });
        });
    });
    xtest("404: Responds with an 404 error message if endpoint is invalid", () => {
      return request(app)
        .get("/api/project")
        .expect(404)
        .then(({ body }) => {
          expect(body.msg).toBe("Page not found");
        });
    });
  });
  describe("Project by ID", () => {
    test("200: Responds with project by given ID", () => {
      return request(app)
        .get("/api/projects/2")
        .expect(200)
        .then(({ body }) => {
          expect(body.project).toMatchObject({
            project_id: 2,
            title: "2Gather",
            category: 1,
            description: "Final group project",
            link: "INSERT LINK HERE",
            avatar_url: "INSERT SCREENSHOT HERE",
          });
        });
    });
    test("404: Responds with error msg when given ID does not exisit", () => {
      return request(app)
        .get("/api/projects/999")
        .expect(404)
        .then(({ body }) => {
          expect(body.msg).toBe("Resource not found");
        });
    });
    test("400: Responds with error msg when given invalid ID", () => {
      return request(app)
        .get("/api/projects/smile")
        .expect(400)
        .then(({ body }) => {
          expect(body.msg).toBe("Bad Request, invalid input");
        });
    });
  });
});
