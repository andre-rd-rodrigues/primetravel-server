const { faker } = require("@faker-js/faker");
const _ = require("lodash");

const customer = {
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  fullName: faker.person.fullName(),
  gender: faker.person.gender(),
  contacts: {
    phoneNumber: faker.phone.number(),
    email: faker.internet.email()
  },
  createdAt: faker.date.between({ min: 1577836800000, max: 1893456000000 }),
  isActive: true,
  avatar: {
    name: faker.person.fullName(),
    percent: 100,
    size: 40088,
    status: "done",
    type: "image/jpeg",
    uid: faker.string.uuid(),
    url: faker.image.avatar()
  },
  addresses: [
    {
      text: faker.location.streetAddress(),
      coordinate: [faker.location.latitude(), faker.location.longitude()]
    }
  ],
  reviews: _.times(_.random(1, 3), () => {
    return {
      id: faker.string.uuid(),
      star: _.random(1, 5),
      comment: faker.lorem.paragraph()
    };
  })
};

const location = {
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  state: faker.location.state(),
  country: faker.location.country(),
  zipCode: faker.location.zipCode(),
  imageURL: faker.image.url()
};

const package = {
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
      location,
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

const destination = {
  id: faker.string.uuid(),
  location,
  title: faker.lorem.words(),
  description: faker.lorem.paragraph(),
  hotel: {
    name: faker.company.name(),
    address: location,
    contact: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number()
    },
    rating: faker.number.int({ min: 3, max: 5, precision: 0.1 }),
    imageUrl: faker.image.urlLoremFlickr({ category: "business" })
  },
  isActive: faker.datatype.boolean()
};

const travelAgent = {
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  fullName: faker.person.fullName(),
  gender: faker.person.gender(),
  contacts: {
    phoneNumber: faker.phone.number(),
    email: faker.internet.email()
  },
  agency: {
    name: faker.company.name(),
    location,
    contacts: {
      phoneNumber: faker.phone.number(),
      email: faker.internet.email()
    }
  },
  createdAt: faker.date.between({ min: 1577836800000, max: 1893456000000 }),
  isActive: true,
  avatar: {
    name: faker.person.fullName(),
    percent: 100,
    size: 40088,
    status: "done",
    type: "image/jpeg",
    uid: faker.string.uuid(),
    url: faker.image.avatar()
  },
  customers: _.times(_.random(1, 3), () => {
    return customer;
  })
};

const review = {
  id: faker.string.uuid(),
  customer,
  star: _.random(1, 5),
  comment: faker.lorem.paragraph()
};

module.exports = {
  customer,
  location,
  package,
  destination,
  travelAgent,
  review
};
