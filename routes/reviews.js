const { review } = require("../mocks/index");
const _ = require("lodash");

const reviews = _.times(8, function (n) {
  return { reviewId: n, ...review };
});

module.exports = {
  reviews
};
