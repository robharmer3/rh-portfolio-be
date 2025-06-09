const db = require("../connection");

const createProjects = () => {
  return db.query(
    `CREATE TABLE projects
        (project_id INT PRIMARY KEY,
        title VARCHAR,
        description VARCHAR,
        category VARCHAR)`
  );
};

const createCategories = () => {
  return db.query(
    `CREATE TABLE categories 
    (category_id INT PRIMARY KEY, 
    title VARCHAR, 
    description VARCHAR)`
  );
};

module.exports = { createProjects, createCategories };
