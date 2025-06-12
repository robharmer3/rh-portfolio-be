const express = require("express");
const {
  getAllProjects,
  getProjectById,
} = require("../controllers/controller.project");
const projectRouter = express.Router();

projectRouter.route("/").get(getAllProjects);
projectRouter.route("/:project_id").get(getProjectById);

module.exports = projectRouter;
