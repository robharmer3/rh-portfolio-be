const {
  fetchAllProjects,
  fetchProjectByID,
} = require("../models/model.project");

exports.getAllProjects = (request, response, next) => {
  fetchAllProjects()
    .then((projects) => {
      response.status(200).send({ projects });
    })
    .catch((error) => {
      next(error);
    });
};

exports.getProjectById = (request, response, next) => {
  const { project_id } = request.params;
  fetchProjectByID(project_id)
    .then((project) => {
      response.status(200).send({ project });
    })
    .catch((error) => {
      next(error);
    });
};
