const express = require("express");
const cors = require("cors");
const endpoints = require("./endpoints.json");
const { apiRouter, categoriesRouter, projectRouter } = require("./routers");
const {
  handleIncorrectPath,
  handleCustomError,
  handleSqlError,
  handleServerError,
} = require("./controllers/controller.error");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/projects", projectRouter);

apiRouter.route("/").get((request, response) => {
  response.status(200).send({ endpoints });
});

// apiRouter.route("/*", handleIncorrectPath);
app.use(handleCustomError);
app.use(handleSqlError);
app.use(handleServerError);

module.exports = app;
