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
    .query(`DROP TABLE IF EXISTS categories`)
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS projects`);
    })
    .then(() => {
      return createProjects();
    })
    .then(() => {
      return createCategories();
    })
    .then(() => {
      return insertProject(projectData);
    })
    .then(() => {
      return insertCategories(categoryData);
    });
};
module.exports = seed;
