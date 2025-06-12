const db = require("../db/connection");

exports.fetchAllProjects = () => {
  return db.query(`SELECT * FROM projects`).then(({ rows }) => {
    return rows;
  });
};

exports.fetchProjectByID = (project_id) => {
  return db
    .query(
      `SELECT * FROM projects
        WHERE project_id = $1`,
      [project_id]
    )
    .then(({ rows }) => {
      if (rows.length === 0) {
        return Promise.reject({ status: 404, msg: "Resource not found" });
      }
      return rows[0];
    });
};
