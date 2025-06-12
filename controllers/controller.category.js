const {
  fetchAllCategories,
  fetchCategoryByID,
} = require("../models/model.category");

exports.getAllCategories = (request, response, next) => {
  fetchAllCategories()
    .then((categories) => {
      response.status(200).send({ categories });
    })
    .catch((error) => {
      next(error);
    });
};

exports.getCategoryById = (request, response, next) => {
  const { category_id } = request.params;
  fetchCategoryByID(category_id)
    .then((category) => {
      console.log(category);
      response.status(200).send({ category });
    })
    .catch((error) => {
      next(error);
    });
};
