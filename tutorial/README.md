# Tutorial

Everything you want to know to become an expert in React/Redux.

##Book References

tbd

## 1) The Basics

tbd

## 2) Advanced Basics

tbd

## 3) ES6 & ES6 Modules

This will be an overview of the syntax changes and features of JavaScript. This section will use the references below as well as the [tutorials section](https://github.com/scottpreston/react-starter/tree/master/tutorial).

### Section Outline

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

#### Reference Links

Please use the links below as references to the course materials.

* [http://es6-features.org](es6-features.org) - All of the ES6 features in one place with some examples, but not a of explanation.
* [Metaprogramming with ES6](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/) - An introduction to Symbols, Proxying, and Reflection.
* [Introduction To ES6 Modules](https://strongloop.com/strongblog/an-introduction-to-javascript-es6-modules/) - Imports & Exports.
* [ES6 Promises](http://www.datchley.name/es6-promises/) - Promises to prevent nested callbacks and more readable code.
* [ES6 Maps](https://ponyfoo.com/articles/es6-maps-in-depth) - New Data structures in ES6.

## 4) Webpack

Installation

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


## 5) React & JSX

### Installation

```bash
npm install --save react react-dom
```

Update .babelrc

```JavaScript
{
  "presets": ["es2015", "react"]
}
```

[JSX Introduction](
https://facebook.github.io/react/docs/introducing-jsx.html) Get a basic overview before juming right into React.

## 6) React

tbd

## 7) ImmutableJS

tbd

## 8) Redux

tbd

## 9) Testing React

tbd

## 10) Creating A Sample Project

tbd
