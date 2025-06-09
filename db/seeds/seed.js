const db = require("../connection");
const { createProjects, createCategories } = require("./utils");

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
    });
};
module.exports = seed;
