const db = require("../connection");
const { projectData, categoryData } = require("../data/test-data");
const {
  createProjects,
  createCategories,
  insertProject,
  insertCategories,
} = require("./utils");

const seed = () => {
  return db
    .query(`DROP TABLE IF EXISTS projects`)
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS categories`);
    })
    .then(() => {
      return createCategories();
    })
    .then(() => {
      return createProjects();
    })
    .then(() => {
      return insertCategories(categoryData);
    })
    .then(() => {
      return insertProject(projectData);
    });
};
module.exports = seed;
