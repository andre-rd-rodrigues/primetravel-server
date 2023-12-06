const _ = require("lodash");
const { createPackage } = require("../utils");

const packages = _.times(7, function (n) {
  return { packageNumber: n, ...createPackage() };
});

module.exports = {
  packages
};
