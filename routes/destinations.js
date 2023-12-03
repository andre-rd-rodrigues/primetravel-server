const _ = require("lodash");
const { destination } = require("../mocks");

const destinations = _.times(10, function (n) {
  return { destinationNumber: n, ...destination };
});

module.exports = {
  destinations
};
