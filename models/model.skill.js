const db = require("../db/connection");

exports.fetchAllSkills = () => {
  return db.query(`SELECT * FROM skills`).then(({ rows }) => {
    return rows;
  });
};
