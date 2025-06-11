const db = require("../db/connection");

exports.fetchAllCategories = (request, response, next) => {
  return db.query(`SELECT * FROM categories`).then(({ rows }) => {
    return rows;
  });
};
