const express = require("express");
const {
  getAllSkillsCategories,
} = require("../controllers/controller.skill.catergories");
const skillCategoryRouter = express.Router();

skillCategoryRouter.route("/").get(getAllSkillsCategories);
// skillCategoryRouter.route("/:category_id").get();

module.exports = skillCategoryRouter;
