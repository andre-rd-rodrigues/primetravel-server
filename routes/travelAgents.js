const _ = require("lodash");
const { createTravelAgent } = require("../utils");

const travelAgents = _.times(10, function (n) {
  return { agentNumber: n, ...createTravelAgent() };
});

module.exports = {
  travelAgents
};
