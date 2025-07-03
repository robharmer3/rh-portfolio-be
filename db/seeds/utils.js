const db = require("../connection");
const format = require("pg-format");

const createProjects = () => {
  return db.query(
    `CREATE TABLE projects
        (project_id SERIAL PRIMARY KEY,
        title VARCHAR,
        description VARCHAR,
        category INT REFERENCES project_categories(project_category_id) ON DELETE CASCADE NOT NULL,
        link VARCHAR,
        avatar_url VARCHAR(1000))`
  );
};

const createProjectCategories = () => {
  return db.query(
    `CREATE TABLE project_categories 
    (project_category_id SERIAL PRIMARY KEY, 
    title VARCHAR, 
    description VARCHAR)`
  );
};

const createSkills = () => {
  return db.query(
    `CREATE TABLE skills 
    (skill_id SERIAL PRIMARY KEY, 
    title VARCHAR,
    category INT REFERENCES skill_categories(skill_category_id) ON DELETE CASCADE NOT NULL)`
  );
};

const createSkillsCategories = () => {
  return db.query(
    `CREATE TABLE skill_categories 
    (skill_category_id SERIAL PRIMARY KEY, 
    title VARCHAR)`
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

const insertProjectCategories = (projectCategories) => {
  const formattedCategories = projectCategories.map((category) => {
    return [category.name, category.description];
  });

  return db.query(
    format(
      `INSERT INTO project_categories
    (title, description)
    VALUES
    %L
    RETURNING *`,
      formattedCategories
    )
  );
};

const insertSkills = (skills) => {
  const formattedSkills = skills.map((skill) => {
    return [skill.title, skill.category];
  });

  return db.query(
    format(
      `INSERT INTO skills
    (title, category)
    VALUES
    %L
    RETURNING *`,
      formattedSkills
    )
  );
};

const insertSkillCategories = (skillCategories) => {
  const formattedCategories = skillCategories.map((category) => {
    return [category.title];
  });

  return db.query(
    format(
      `INSERT INTO skill_categories
    (title)
    VALUES
    %L
    RETURNING *`,
      formattedCategories
    )
  );
};

module.exports = {
  createProjects,
  createProjectCategories,
  createSkills,
  createSkillsCategories,
  insertProject,
  insertProjectCategories,
  insertSkills,
  insertSkillCategories,
};
