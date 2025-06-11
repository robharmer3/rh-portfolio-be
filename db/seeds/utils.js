const db = require("../connection");
const format = require("pg-format");

const createProjects = () => {
  return db.query(
    `CREATE TABLE projects
        (project_id SERIAL PRIMARY KEY,
        title VARCHAR,
        description VARCHAR,
        category VARCHAR,
        link VARCHAR,
        avatar_url VARCHAR(1000))`
  );
};

const createCategories = () => {
  return db.query(
    `CREATE TABLE categories 
    (category_id SERIAL PRIMARY KEY, 
    title VARCHAR, 
    description VARCHAR)`
  );
};

const insertProject = (projects) => {
  const formattedProjects = projects.map((project) => {
    return [
      project.title,
      project.description,
      project.category,
      project.link,
      project.avatar_url,
    ];
  });

  return db.query(
    format(
      `INSERT INTO projects
    (title, description, category, link, avatar_url)
    VALUES
    %L
    RETURNING *`,
      formattedProjects
    )
  );
};

const insertCategories = (categories) => {
  const formattedCategories = categories.map((category) => {
    return [category.name, category.description];
  });

  return db.query(
    format(
      `INSERT INTO categories
    (title, description)
    VALUES
    %L
    RETURNING *`,
      formattedCategories
    )
  );
};

module.exports = {
  createProjects,
  createCategories,
  insertProject,
  insertCategories,
};
