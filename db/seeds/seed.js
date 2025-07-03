const db = require("../connection");
const {
  createProjects,
  createCategories,
  insertProject,
  insertCategories,
  createSkills,
  insertSkills,
} = require("./utils");

const seed = ({ categoryData, projectData, skillData }) => {
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
      return createSkills();
    })
    .then(() => {
      return insertCategories(categoryData);
    })
    .then(() => {
      return insertProject(projectData);
    })
    .then(() => {
      return insertSkills(skillData);
    });
};
module.exports = seed;
