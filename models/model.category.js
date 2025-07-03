const db = require("../db/connection");

exports.fetchAllCategories = (request, response, next) => {
  return db.query(`SELECT * FROM project_categories`).then(({ rows }) => {
    return rows;
  });
};

exports.fetchCategoryByID = (category_id) => {
  return db
    .query(
      `SELECT * FROM project_categories
        WHERE project_category_id = $1`,
      [category_id]
    )
    .then(({ rows }) => {
      if (rows.length === 0) {
        return Promise.reject({ status: 404, msg: "Resource not found" });
      }
      return rows[0];
    });
};
