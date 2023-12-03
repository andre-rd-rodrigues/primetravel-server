const { review } = require("../mocks/index");
const _ = require("lodash");

const reviews = _.times(50, function (n) {
  return { reviewId: n, ...review };
});

module.exports = {
  reviews
};
