const { customer } = require("../mocks/index");
const _ = require("lodash");

const customers = _.times(15, function (n) {
  return customer;
});

module.exports = {
  customers
};
