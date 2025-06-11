const { fetchAllCategories } = require("../models/model.category");

exports.getAllCategories = (request, response, next) => {
  fetchAllCategories()
    .then((categories) => {
      response.status(200).send({ categories });
    })
    .catch((error) => {
      next(error);
    });
};
