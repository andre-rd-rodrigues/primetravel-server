const { faker } = require("@faker-js/faker");
var _ = require("lodash");

// Function to generate a random event
const generateRandomEvent = () => ({
  id: faker.string.uuid(),
  name: faker.lorem.word(),
  date: faker.date.future(),
  location: faker.location.city()
});

// Function to generate a random status
const generateRandomStatus = () => {
  const statusOptions = ["active", "pending", "finished"];
  return _.sample(statusOptions);
};

module.exports = {
  generateRandomEvent,
  generateRandomStatus
};
