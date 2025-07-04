const express = require("express");
const cors = require("cors");
const {
  apiRouter,
  categoriesRouter,
  projectRouter,
  skillRouter,
  skillCategoriesRouter,
} = require("./routers");
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
app.use("/api/projects/categories", categoriesRouter);
app.use("/api/projects", projectRouter);
app.use("/api/skills", skillRouter);
app.use("/api/skills/categories", skillCategoriesRouter);

// app.use("/*").all(handleIncorrectPath);

app.use(handleCustomError);
app.use(handleSqlError);
app.use(handleServerError);

module.exports = app;
