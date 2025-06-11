const express = require("express");
const categoryRouter = express.Router();
const { getAllCategories } = require("../controllers/controller.category");

categoryRouter.route("/").get(getAllCategories);

module.exports = categoryRouter;
