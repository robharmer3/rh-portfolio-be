exports.handleIncorrectPath = (request, response) => {
  response.status(404).send({ msg: "Page not found" });
};
