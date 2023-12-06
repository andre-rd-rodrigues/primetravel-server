const _ = require("lodash");
const { createBooking } = require("../utils");

const bookings = _.times(20, function (n) {
  return { bookingNumber: n, ...createBooking() };
});

module.exports = {
  bookings
};
