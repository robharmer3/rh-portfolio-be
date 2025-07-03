const db = require("../connection");
const {
  createProjects,
  createProjectCategories,
  createSkills,
  createSkillsCategories,
  insertProject,
  insertSkills,
  insertSkillCategories,
  insertProjectCategories,
} = require("./utils");

const seed = ({
  projectCategoryData,
  projectData,
  skillData,
  skillCategoryData,
}) => {
  return db
    .query(`DROP TABLE IF EXISTS projects`)
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS project_categories`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS skills`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS skill_categories`);
    })
    .then(() => {
      return createProjectCategories();
    })
    .then(() => {
      return createProjects();
    })
    .then(() => {
      return createSkillsCategories();
    })
    .then(() => {
      return createSkills();
    })
    .then(() => {
      return insertProjectCategories(projectCategoryData);
    })
    .then(() => {
      return insertProject(projectData);
    })
    .then(() => {
      return insertSkillCategories(skillCategoryData);
    })
    .then(() => {
      return insertSkills(skillData);
    });
};
module.exports = seed;
