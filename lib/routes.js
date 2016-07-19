'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _reactRouter = require('react-router');

var _MainLayout = require('./components/MainLayout');

var _MainLayout2 = _interopRequireDefault(_MainLayout);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _UserContainer = require('./containers/UserContainer');

var _UserContainer2 = _interopRequireDefault(_UserContainer);

var _UserDetails = require('./components/UserDetails');

var _UserDetails2 = _interopRequireDefault(_UserDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = React.createElement(
      _reactRouter.Route,
      { component: _MainLayout2.default },
      React.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
      React.createElement(_reactRouter.Route, { path: '/users', component: _UserContainer2.default }),
      React.createElement(_reactRouter.Route, { path: '/users/:id', component: _UserDetails2.default })
);