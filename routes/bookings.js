const { generateRandomEvent, generateRandomStatus } = require("../utils");
const { faker } = require("@faker-js/faker");
const _ = require("lodash");
const { customer, package } = require("../mocks");

const bookings = _.times(20, function (n) {
  return {
    id: faker.string.uuid(),
    bookingNumber: n,
    customer,
    amount: faker.number.int({ min: 500, max: 5000 }),
    createdAt: faker.date.past(),
    packages: _.times(2, package),
    status: generateRandomStatus,
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      zipCode: faker.location.zipCode()
    },
    travelAgent: {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number(),
      customers: [
        {
          id: faker.string.uuid(),
          name: faker.person.fullName(),
          email: faker.internet.email()
        }
      ]
    },
    events: _.times(1, generateRandomEvent)
  };
});

module.exports = {
  bookings
};
