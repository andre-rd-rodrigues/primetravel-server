# ✈️ **PrimeTravel Server**

## **Overview**

Welcome to PrimeTravel Server! 🌍✈️ This project serves as the backend for a travel agency CRUD application. It leverages the power of [Faker](https://github.com/marak/Faker.js/) and [Lodash](https://lodash.com/) to generate realistic data for travel destinations, packages, activities, and more.

## **Dependencies**

- [Faker](https://www.npmjs.com/package/faker) (^6.6.6): A library for generating fake data.
- [Lodash](https://lodash.com/) (^4.17.21): A utility library providing helpful functions for working with arrays, objects, and more.
- [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker) (^8.3.1): Another version of Faker, offering additional features.
- [Nodemon](https://www.npmjs.com/package/nodemon) (^3.0.2): A utility that monitors for changes and automatically restarts your server.

## **Scripts**

- **`server-json`**: Start the server using [JSON Server](https://github.com/typicode/json-server) to mock APIs. It watches for changes in the **`routes`**, **`mocks`**, and **`data.js`** files.

## Routes

The project includes the following routes:

- **Bookings**: Manage bookings and reservations.
- **Customers**: Handle customer information and interactions.
- **Packages**: Create, update, and view travel packages.
- **Destinations**: Explore and manage various travel destinations.
- **Travel Agents**: Track details of travel agents, including assigned customers.
- **Reviews**: Collect and display reviews for destinations and packages.

## **How to Add a Route**

1. Add a new file in the **`routes`** directory.
2. Import the new route file in **`data.js`**.
3. Update the necessary logic in the route file.

## **How to Update a Route**

- Typically, data manipulation and updates are centered in the **`mocks`** directory.

## **Project Structure**

- **`routes`**: Contains route files to handle different API endpoints.
- **`mocks`**: Houses mock data for various entities like destinations, packages, activities, etc.
- **`data.js`**: Aggregates data from different routes and mocks to serve as the main data source.
- **`server.js`**: The entry point for the server setup.
- **`package.json`**: Configuration file specifying dependencies, scripts, and project details.

Feel free to explore, customize, and enhance the project to suit your needs. Happy coding! 🚀
