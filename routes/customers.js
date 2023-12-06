const _ = require("lodash");
const { createCustomer } = require("../utils");

const customers = _.times(15, function (n) {
  return { ...createCustomer() };
});

module.exports = {
  customers
};
