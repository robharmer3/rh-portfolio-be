const { fetchAllSkills } = require("../models/model.skill");

exports.getAllSkills = (request, response, next) => {
  fetchAllSkills()
    .then((skills) => {
      response.status(200).send({ skills });
    })
    .catch((error) => {
      next(error);
    });
};
