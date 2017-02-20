# Tutorial

Everything you want to know to become an expert in React/Redux.

## 1) The Basics

### Tutorial Outline

All examples for the topics below are in tutorial/1-basics.

1. HTML Basics
2. CSS Basics
3. JavaScript Basics
4. HTTP & Rest
5. Hello World JavaScript
6. OO JavaScript & Functional Patterns
7. NodeJS (Server Side JS)
8. NPM (Node Package Manager)
9. NPM Scripts
10. ESLint

### Online References

* [W3 Schools HTML](http://www.w3schools.com/html/default.asp) - HTML overview
* [W3 Schools CSS](http://www.w3schools.com/css/default.asp) - CSS Overview
* [W3 Schools Bootstrap](http://www.w3schools.com/bootstrap/default.asp) - Bootstrap Overview
* [W3 Schools JavaScript](http://www.w3schools.com/js/default.asp) - JavaScript Overview
* [My LearnHTML5Book Site](http://www.learnhtml5book.com/) - HTML5 & CSS3 (Shameless Plug)
* [REST Description](http://stackoverflow.com/questions/671118/what-exactly-is-restful-programming) - REST Description
* [JavaScript Design Patterns Book](https://addyosmani.com/resources/essentialjsdesignpatterns/book) - Online version of book.
* [Hello World JavaScript Article](http://scottpreston.github.io/update/2016/12/07/more-hello-world-javascript.html) - Differences with app frameworks.
* [NPM Scripts](https://docs.npmjs.com/misc/scripts) - NPM Scripts
* [ESLint](http://eslint.org) - JavaScript Linting Package
* [ESLint NPM Install](https://www.npmjs.com/package/eslint) - ES Lint NPM Project

## 2) ES6 & ES6 Modules

This will be an overview of the syntax changes and features of JavaScript. This section will use the references below as well as the [tutorials section](https://github.com/scottpreston/react-starter/tree/master/tutorial).

### Tutorial Outline

1. Babel & Hello World
2. constants
3. scoping (let vs var, block variables, block functions)
4. arrow functions
5. default parameters
6. template literals
7. object properties
8. classes formating of objects
9. classes inheritance
10. classes static members
11. classes getter/setter
12. for of operator (iteration behavior)
13. metaprogramming (symbols vs. reflect vs. proxy)
14. generators
15. map/set weakmap/weakset
16. typed arrays
17. promises
18. modules (export, import)

### Reference Links

Please use the links below as references to the course materials.

* [es6-features.org](http://es6-features.org) - All of the ES6 features in one place with some examples, but not a of explanation.
* [Metaprogramming with ES6](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/) - An introduction to Symbols, Proxying, and Reflection.
* [ES6 Modules](https://strongloop.com/strongblog/an-introduction-to-javascript-es6-modules/) - Imports & Exports.
* [ES6 Promises](http://www.datchley.name/es6-promises/) - Promises to prevent nested callbacks and more readable code.
* [ES6 Data Structures](https://ponyfoo.com/articles/es6-maps-in-depth) - New Data structures in ES6.

## 3) Webpack

###Installation

```bash
# to install
npm install webpack -g
# to upgrade
npm upgrade webpack -g
```
Hello World (app.js, bar.js, bundle.js, index.html, webpack.config)

CSS

```bash
npm install style-loader css-loader --save-dev
```

Code Splitting - See folder webpack2.

command options:

```bash
webpack --optimize-minimize
webpack -p // production same as optimize-minimize
webpack -d // devmode
webpack --watch
webpack --config alt.config.js

```

### Tutorial Outline

1. Simple examples
2. Examples with Code Splitting
3. Code Challenge 

### Reference Links

* [Webpack2](https://webpack.js.org/) - Official Documentation

## 4) React

### Installation

```bash
// to install react
npm install --save react react-dom

// to work with webpack
npm install --save babel-loader babel-preset-es2015 babel-preset-react
```

Update .babelrc

```JavaScript
{
  "presets": ["es2015", "react"]
}
```

### Tutorial Outline

1. Easy Hello World
2. Hello World with classes
3. Components
4. Working with State
5. Adding CSS, Events, & Conditional Rendering
6. Working with list
7. Forms
8. Communicating Between Components
9. Ajax without Redux
10. Linking without React-Router
11. Coding Challenge

### References Links

* [Introduction To Flux](https://facebook.github.io/flux/)
* [JSX Introduction](https://facebook.github.io/react/docs/introducing-jsx.html) - Get a basic overview before juming right into React.
* [Another React Introduction](http://andrewhfarmer.com/)
* [The Official React Documentation](https://facebook.github.io/react/docs/hello-world.html)
* [AirBNB Style Guide](https://github.com/airbnb/javascript/tree/master/react#basic-rules)

## 5) React Router

### Installation

```bash
npm install react-router --save
```

### Tutorial Outline

1. Hello World
2. Paramters
3. Layouts
4. Challenge

### References Links

* [Official React-Router](https://github.com/ReactTraining/react-router) 
* [React Router Tutorial](https://github.com/reactjs/react-router-tutorial)
* [React Router Guides / Apis](https://github.com/ReactTraining/react-router/tree/master/docs)

## 6) Redux

### Installation

```bash
npm install redux react-redux  --save
```

### Tutorial Outline

1. Vanilla (Very Simple Example)
2. Counter
3. Hello-Redux
4. Connecting Redux
5. Challenge

### References Links

* [Official Redux Site](http://redux.js.org/) 
* [Hello Redux] (https://github.com/scottpreston/hello-redux)

## 7) Immutable JS

### Tutorial Outline

1. Simple Overview of Set and Map

### Advanced Topics 

There's some libraries that show how to use Redux with ImmutableJS and combine some of the stuff you are doing

## 8) Testing React

### Tutorial Outline

1. Unit Testing JavaScript 
2. Testing ES6 - Mocha/Chai
3. Getting Coverage ES6
4. Testing with Jest
5. Testing with Enzyme

### Reference Links

* [Mocha](https://mochajs.org/)
* [Chai](http://chaijs.com/)
* [Fetch] (https://davidwalsh.name/fetch)
* [NodeFetch] (https://www.npmjs.com/package/node-fetch)
* [Enzyme](https://github.com/airbnb/enzyme)
* [nyc](https://github.com/istanbuljs/nyc)

## Prepping For Lab Next Week.

* Component Design Discussion
* Advanced Topics (Discussed a little each next week)
  * [https://github.com/gajus/redux-immutable](https://github.com/gajus/redux-immutable)
  * [https://github.com/reactjs/react-router-redux](https://github.com/reactjs/react-router-redux)
  * More With Connect
  * Browser Testing with Karma
  * Testing with Jest
  * Alternate REST APIs (Fetch, Axios)
  * More Webpack Configurations
  * Practical ESLint Configurations

### App Overview

* You will host app locally or in s3.
* App will have a REST api in the cloud
  * /login, /logout, /register, /account, /forgotpass, /changepass
  * GET /heros - get list of heros
  * POST /hero - create new hero
  * GET /hero/:id - get hero data for hero = id
  * PUT /hero/:id - update hero data for hero = id
  * POST /powers - create power list for heros
  * POST /abilities - create abilities list for heros
* tbd...
