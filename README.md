
# Softala3SuperAda

Softala 3. 

Super Ada sovellusprojekti. 

Tiimien käyttöliittymä

===

Rest Palvelin: "link here"

Admin käyttöliitymmä: "link here"

===

Extraa
===

React Native Starter Kit is a part of [Pepperoni](http://getpepperoni.com), a framework for kickstarting digital product development.

## Contents

:warning: **WORK IN PROGRESS** |
:star: **COMING SOON**

Not all of the below is yet fully implemented

### Application Blueprint

* Always up-to-date [React Native](https://facebook.github.io/react-native/) scaffolding
* Modular and well-documented structure for application code
* [Redux](http://redux.js.org/) and [ImmutableJS](https://facebook.github.io/immutable-js/) for safe and **Reasonaboutable**:tm: state management
* [Redux Loop](https://github.com/raisemarketplace/redux-loop) for Elm-style controlled side effects
* Redux-managed Navigators for Stack-based and Tabbed navigation with NavigationExperimental
* Disk-persisted application state caching for offline support and snappy startup performance
* Clean and testable service layer for interacting with RESTful APIs
* :warning: Sample app to show how to wire it all together
* :star: JSON Web Token authentication
* :star: Multi-environment configuration (dev, staging, production) for iOS and Android
* :star: Built-in error handling and customizable error screens

### Testing Setup

* [Mocha](https://mochajs.org/) for unit testing application code
* [Enzyme](https://github.com/airbnb/enzyme) and fully mocked React Native for unit testing UI components
* [Istanbul](https://github.com/gotwarlost/istanbul) code coverage
* Utilities for end-to-end integration testing Redux state, including side effects and asynchronous actions

## Getting started

Once you have the code downloaded, follow the **[Setup guide](docs/SETUP.md)** to get started.

##### Run unit tests
```
$ npm test
```

##### Run tests every time code changes
```
$ npm run test:watch
```

##### Generate code coverage report
```
$ npm run coverage
```

Read the **[Testing guide](docs/TESTING.md)** for more information about writing tests.

## Deployment

Read the **[Deployment guide](docs/DEPLOYMENT.md)** .

## License

[MIT License](LICENSE)

## Credits

This project was initially motivated by [Snowflake](https://github.com/bartonhammond/snowflake), a React Native boilerplate by Barton Hammond. It shares some features and design principles for Pepperoni, but it wasn't the right fit for our needs. At this time Snowflake is more mature, so if you like Pepperoni but didn't agree with something we are doing, you should check it out to see if it's a good fit for your app.
