'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _MainLayout = require('./components/MainLayout');

var _MainLayout2 = _interopRequireDefault(_MainLayout);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _UserContainer = require('./containers/UserContainer');

var _UserContainer2 = _interopRequireDefault(_UserContainer);

var _UserDetails = require('./components/UserDetails');

var _UserDetails2 = _interopRequireDefault(_UserDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)();

(0, _reactDom.render)(_react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { component: _MainLayout2.default, store: store },
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/users', component: _UserContainer2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/users/:id', component: _UserDetails2.default })
  )
), document.getElementById('app'));