const db = require("../db/connection");

exports.fetchAllSkillCategories = () => {
  return db.query(`SELECT * FROM skill_categories`).then(({ rows }) => {
    return rows;
  });
};
