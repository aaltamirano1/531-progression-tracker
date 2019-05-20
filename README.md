# 5/3/1 Progression Tracker

This is a tool for people running a 5/3/1 progression on a lift or following a 5/3/1 program. Users are asked to provide a name and the most amount of weight they can lift for an exercise they would like to track. This app programmatically creates a 4 week schedule to increase the lift based on a popular schedule/method known as a 5/3/1 progression created by Jim Wendler. Users can also keep notes and reminders for a given exercise and track what week they are on.

## You can access it [here](https://the-531-progression-tracker.herokuapp.com).  
If you only want a demo, login with the username <b>demo</b> and the password <b>demopassword</b>.

## Technologies Used
### Client Side
- jQuery and React
- [React Redux](https://react-redux.js.org/) to link React components to the Redux store.
- [React Router DOM](https://www.npmjs.com/package/react-router-dom) to render different components depending on which URL is visited.
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) to write async logic that interacts with the store.
- [Enzyme](https://airbnb.io/enzyme/) for testing components, actions, and reducer.
- [TravisCI](https://travis-ci.org/) for continuous integration, pushes to heroku if all tests pass.

### Server Side
- [Node.js](https://nodejs.org/en/) for package management.
- [Express](http://expressjs.com/) for managing routes, requests, and responses.
- [Mongoose](https://mongoosejs.com/) for creating models.
- [Passport](http://www.passportjs.org/) for setting up local and JWT authentication.
- [JSON Web Tokens](https://jwt.io/) to protect endpoints by requiring users to log in.
- [Bcrypt](https://www.npmjs.com/package/bcrypt) to encrypt passwords and validate them when users log in.
- [Body-Parser](https://www.npmjs.com/package/body-parser) for parsing json request bodies.
- [Chai](https://www.chaijs.com/) and [Mocha](https://mochajs.org/) for testing requests to endpoints.
- [Faker](https://github.com/marak/Faker.js/) to seed test databases with fake users and fake exercises and notes.
- [TravisCI](https://travis-ci.org/) for continuous integration, pushes to heroku if all tests pass.

Check out the back end [here](https://github.com/aaltamirano1/531-progression-tracker-backend).

## Screenshots
![Imgur Image](https://imgur.com/XOETIZ3.jpg).
