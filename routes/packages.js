const _ = require("lodash");
const { package } = require("../mocks");

const packages = _.times(5, function (n) {
  return { packageNumber: n, ...package };
});

module.exports = {
  packages
};
