const _ = require("lodash");
const { createDestination } = require("../utils");

const destinations = _.times(10, function (n) {
  return { destinationNumber: n, ...createDestination() };
});

module.exports = {
  destinations
};
