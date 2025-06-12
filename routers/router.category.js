const express = require("express");
const categoryRouter = express.Router();
const {
  getAllCategories,
  getCategoryById,
} = require("../controllers/controller.category");

categoryRouter.route("/").get(getAllCategories);
categoryRouter.route("/:category_id").get(getCategoryById);

module.exports = categoryRouter;
