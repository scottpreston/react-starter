# Tutorial

Everything you want to know to become an expert in React/Redux.

##Book References

tbd

## 1) The Basics

### Tutorial Outline

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

* [http://www.w3schools.com/html/default.asp](http://www.w3schools.com/html/default.asp) - HTML overview
* [http://www.w3schools.com/css/default.asp](http://www.w3schools.com/css/default.asp) - CSS Overview
* [http://www.w3schools.com/bootstrap/default.asp](http://www.w3schools.com/bootstrap/default.asp) - Bootstrap Overview
* [http://www.w3schools.com/js/default.asp](http://www.w3schools.com/js/default.asp) - JavaScript Overview
* [http://www.learnhtml5book.com/](http://www.learnhtml5book.com/) - HTML5 & CSS3 (Shameless Plug)
* [http://stackoverflow.com/questions/671118/what-exactly-is-restful-programming](stackoverflow) - REST Description
* [https://addyosmani.com/resources/essentialjsdesignpatterns/book/](JavaScript Design Patterns) - Online version of book.
* [http://scottpreston.github.io/update/2016/12/07/more-hello-world-javascript.html](Hello World JavaScript) - Differences with app frameworks.
* [https://docs.npmjs.com/misc/scripts](https://docs.npmjs.com/misc/scripts) - NPM Scripts
* [http://eslint.org](ESLint) - JavaScript Linting Package


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

* [http://es6-features.org](es6-features.org) - All of the ES6 features in one place with some examples, but not a of explanation.
* [Metaprogramming with ES6](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/) - An introduction to Symbols, Proxying, and Reflection.
* [Introduction To ES6 Modules](https://strongloop.com/strongblog/an-introduction-to-javascript-es6-modules/) - Imports & Exports.
* [ES6 Promises](http://www.datchley.name/es6-promises/) - Promises to prevent nested callbacks and more readable code.
* [ES6 Maps](https://ponyfoo.com/articles/es6-maps-in-depth) - New Data structures in ES6.

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

### References Links
* [JSX Introduction](
https://facebook.github.io/react/docs/introducing-jsx.html) Get a basic overview before juming right into React.
* [Another React Introduction](
  http://andrewhfarmer.com/
)
* [The Official React Documentation](
  https://facebook.github.io/react/docs/hello-world.html
)

## 5) React Router

### Installation

```bash
npm install react-router --save
```


### Tutorial Outline

### References Links


tbd

## 6) Redux

tbd

## 7) Testing React

tbd

## 8) Creating A Sample Project

tbd
