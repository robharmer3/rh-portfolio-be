const express = require("express");
const endpoints = require("../endpoints.json");
const { handleIncorrectPath } = require("../controllers/controller.error");

const apiRouter = express.Router();

apiRouter.route("/").get((request, response) => {
  response.status(200).send({ endpoints });
});

// apiRouter.route("/:*").all(handleIncorrectPath);

module.exports = apiRouter;
