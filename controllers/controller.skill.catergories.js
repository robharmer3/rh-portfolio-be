const {
  fetchAllSkillCategories,
} = require("../models/model.skills.categories");

exports.getAllSkillsCategories = (request, response, next) => {
  fetchAllSkillCategories()
    .then((skillCategories) => {
      response.status(200).send({ skillCategories });
    })
    .catch((error) => {
      next(error);
    });
};
