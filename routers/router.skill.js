const express = require("express");
const { getAllSkills } = require("../controllers/controller.skill");

const skillRouter = express.Router();

skillRouter.route("/").get(getAllSkills);

module.exports = skillRouter;
