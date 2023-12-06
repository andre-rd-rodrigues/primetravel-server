const _ = require("lodash");
const { createReview } = require("../utils");

const reviews = _.times(50, function (n) {
  return { reviewId: n, ...createReview() };
});

module.exports = {
  reviews
};
