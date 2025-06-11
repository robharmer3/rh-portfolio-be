const express = require("express");
const endpoints = require("./endpoints.json");
const { apiRouter, categoriesRouter } = require("./routers");
const { handleIncorrectPath } = require("./controllers/controller.error");
const app = express();

// app.use(express.json());

app.use("/api", apiRouter);
app.use("/api/categories", categoriesRouter);

apiRouter.route("/").get((request, response) => {
  response.status(200).send({ endpoints });
});

apiRouter.route("/*:").all(handleIncorrectPath);

module.exports = app;
