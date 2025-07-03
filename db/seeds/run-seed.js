const db = require("../connection");
const testData = require("../data/test-data/index");
const devData = require("../data/development-data/index");

const seed = require("./seed");

const runSeed = () => {
  return seed(devData).then(() => db.end());
};

runSeed();
