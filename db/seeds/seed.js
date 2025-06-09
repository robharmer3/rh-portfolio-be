const db = require("../connection");

const seed = () => {
  return db.query();
};
module.exports = seed;
