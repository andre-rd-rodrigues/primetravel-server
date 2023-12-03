const {
  bookings,
  customers,
  packages,
  destinations,
  travelAgents,
  reviews
} = require("./routes");

module.exports = () => {
  return {
    bookings,
    customers,
    packages,
    destinations,
    travelAgents,
    reviews
  };
};
