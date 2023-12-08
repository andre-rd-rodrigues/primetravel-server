const { faker } = require("@faker-js/faker");
const _ = require("lodash");

const createDestination = () => {
  return {
    id: faker.string.uuid(),
    location: createLocation(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraph(),
    hotel: {
      name: faker.company.name(),
      address: createLocation(),
      contact: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone_number: faker.helpers.fromRegExp("[1-9]{3}-[1-9]{3}-[1-9]{4}")
      },
      rating: faker.number.int({ min: 3, max: 5, precision: 0.1 }),
      imageUrl: faker.image.urlPicsumPhotos()
    },
    isActive: faker.datatype.boolean()
  };
};

const createCustomer = () => {
  return {
    id: faker.string.uuid(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    full_name: faker.person.fullName(),
    created_at: faker.date.between({ min: 1577836800000, max: 1893456000000 }),
    sex: faker.person.sex(),
    gender: faker.person.gender(),
    contacts: {
      phone_number: faker.helpers.fromRegExp("[1-9]{3}-[1-9]{3}-[1-9]{4}"),
      email: faker.internet.email()
    },
    isActive: true,
    avatar: {
      name: faker.person.fullName(),
      type: "image/jpeg",
      uid: faker.string.uuid(),
      url: faker.image.urlLoremFlickr({ category: "people" })
    },

    payment_info: {
      total_amount: faker.number.int({ min: 500, max: 5000 }),
      transaction_type: faker.finance.transactionType(),
      iban: faker.finance.iban(),
      payment_status: generateRandomStatus()
    },
    bookings: _.times(_.random(1, 4), () => {
      return {
        id: faker.string.uuid(),
        created_at: faker.date.past(),
        destination: createDestination(),
        travel_info: {
          dates: {
            starting_date: faker.date.soon({
              refDate: new Date().toISOString()
            }),
            end_date: faker.date.soon({
              days: 20,
              refDate: new Date().toISOString()
            })
          },
          packages: _.times(2, createPackage()),
          events: _.times(1, generateRandomEvent()),
          airline: {
            flight_number: faker.airline.flightNumber,
            aircraft_type: faker.airline.aircraftType,
            airline: faker.airline.airline,
            flight_seat: faker.airline.seat
          }
        },
        status: generateRandomStatus(),
        travel_agent: {
          id: faker.string.uuid(),
          name: faker.person.fullName(),
          email: faker.internet.email(),
          phone_number: faker.helpers.fromRegExp("[1-9]{3}-[1-9]{3}-[1-9]{4}"),
          customers: [
            {
              id: faker.string.uuid(),
              name: faker.person.fullName(),
              email: faker.internet.email()
            }
          ]
        }
      };
    }),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      country: faker.location.country(),
      zipCode: faker.location.zipCode()
    },
    reviews: _.times(_.random(1, 3), () => {
      return {
        id: faker.string.uuid(),
        title: faker.lorem.words(3),
        star: _.random(2, 5),
        comment: faker.lorem.paragraph()
      };
    })
  };
};

const createLocation = () => {
  return {
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    country: faker.location.country(),
    zipCode: faker.location.zipCode(),
    imageURL: faker.image.urlPicsumPhotos()
  };
};

const createPackage = () => {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraph(),
    destination: faker.location.city(),
    location: {
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      country: faker.location.country(),
      zipCode: faker.location.zipCode()
    },
    activities: _.times(_.random(1, 3), () => {
      return {
        id: faker.string.uuid(),
        name: faker.lorem.words(),
        description: faker.lorem.sentence(),
        date: faker.date.future(),
        location: createLocation(),
        duration: faker.number.int({ min: 1, max: 8 }),
        price: faker.number.int({ min: 50, max: 500 })
      };
    }),
    startDate: faker.date.future(),
    endDate: faker.date.future({ min: 1, max: 30 }),
    price: faker.number.int({ min: 500, max: 5000 }),
    availableSeats: faker.number.int({ min: 1, max: 100 }),
    maxSeats: faker.number.int({ min: 100, max: 200 }),
    isActive: faker.datatype.boolean(),
    images: _.times(3, () => faker.image.url())
  };
};

const createTravelAgent = () => {
  return {
    id: faker.string.uuid(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    full_name: faker.person.fullName(),
    sex: faker.person.sex(),
    gender: faker.person.gender(),
    contacts: {
      phone_number: faker.helpers.fromRegExp("[1-9]{3}-[1-9]{3}-[1-9]{4}"),
      email: faker.internet.email()
    },
    agency: {
      name: faker.company.name(),
      location: createLocation(),
      contacts: {
        phone_number: faker.helpers.fromRegExp("[1-9]{3}-[1-9]{3}-[1-9]{4}"),
        email: faker.internet.email()
      }
    },
    created_at: faker.date.between({ min: 1577836800000, max: 1893456000000 }),
    isActive: true,
    avatar: {
      name: faker.person.fullName(),
      percent: 100,
      size: 40088,
      status: "done",
      type: "image/jpeg",
      uid: faker.string.uuid(),
      url: faker.image.urlLoremFlickr({ category: "people" })
    },
    customers: _.times(_.random(1, 3), () => {
      return createCustomer();
    })
  };
};

const createReview = () => {
  return {
    id: faker.string.uuid(),
    customer: createCustomer(),
    star: _.random(1, 5),
    comment: faker.lorem.paragraph()
  };
};

const createBooking = () => {
  return {
    id: faker.string.uuid(),
    created_at: faker.date.past(),
    customer: {
      id: faker.string.uuid(),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      full_name: faker.person.fullName(),
      sex: faker.person.sex(),
      gender: faker.person.gender(),
      contacts: {
        phone_number: faker.helpers.fromRegExp("[1-9]{3}-[1-9]{3}-[1-9]{4}"),
        email: faker.internet.email()
      },
      created_at: faker.date.between({
        min: 1577836800000,
        max: 1893456000000
      }),
      isActive: true,
      avatar: {
        name: faker.person.fullName(),
        type: "image/jpeg",
        uid: faker.string.uuid(),
        url: faker.image.urlLoremFlickr({ category: "people" })
      },
      address: {
        text: faker.location.streetAddress(),
        coordinate: [faker.location.latitude(), faker.location.longitude()]
      },

      reviews: _.times(_.random(1, 3), () => {
        return {
          id: faker.string.uuid(),
          star: _.random(1, 5),
          comment: faker.lorem.paragraph()
        };
      })
    },
    destination: createDestination(),
    payment_info: {
      total_amount: faker.number.int({ min: 500, max: 5000 }),
      transaction_type: faker.finance.transactionType(),
      iban: faker.finance.iban(),
      payment_status: generateRandomStatus()
    },
    travel_info: {
      dates: {
        starting_date: faker.date.soon({ refDate: new Date().toISOString() }),
        end_date: faker.date.soon({
          days: 20,
          refDate: new Date().toISOString()
        })
      },
      packages: _.times(2, () => {
        return { ...createPackage() };
      }),
      events: _.times(1, generateRandomEvent()),
      airline: {
        flight_number: faker.airline.flightNumber(),
        aircraft_type: faker.airline.aircraftType(),
        flight_company: faker.airline.airline(),
        flight_seat: faker.airline.seat()
      }
    },
    status: generateRandomStatus(),
    travel_agent: {
      id: faker.string.uuid(),
      avatar: {
        type: "image/jpeg",
        url: faker.image.urlLoremFlickr({ category: "people" })
      },
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone_number: faker.helpers.fromRegExp("[1-9]{3}-[1-9]{3}-[1-9]{4}"),
      customers: [
        {
          id: faker.string.uuid(),
          name: faker.person.fullName(),
          email: faker.internet.email()
        }
      ]
    }
  };
};

//------------------------------------------------------

// Function to generate a random event
const generateRandomEvent = () => ({
  id: faker.string.uuid(),
  name: faker.lorem.word(),
  date: faker.date.future(),
  location: faker.location.city()
});

// Function to generate a random status
const generateRandomStatus = () => {
  const statusOptions = ["confirmed", "pending", "canceled"];
  return _.sample(statusOptions);
};

module.exports = {
  createCustomer,
  createLocation,
  createBooking,
  createPackage,
  createDestination,
  createTravelAgent,
  createReview,
  generateRandomEvent,
  generateRandomStatus
};
