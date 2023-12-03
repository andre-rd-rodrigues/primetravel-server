const _ = require("lodash");
const { travelAgent } = require("../mocks");

const travelAgents = _.times(15, function (n) {
  return { agentNumber: n, ...travelAgent };
});

module.exports = {
  travelAgents
};
