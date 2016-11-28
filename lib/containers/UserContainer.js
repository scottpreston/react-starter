'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _actions = require('../actions/');

var actions = _interopRequireWildcard(_actions);

var _redux = require('redux');

var _actionTypes = require('../constants/actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _Users = require('../components/Users');

var _Users2 = _interopRequireDefault(_Users);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserContainer = function (_React$Component) {
  _inherits(UserContainer, _React$Component);

  function UserContainer() {
    _classCallCheck(this, UserContainer);

    var _this = _possibleConstructorReturn(this, (UserContainer.__proto__ || Object.getPrototypeOf(UserContainer)).call(this));

    _this.state = { users: [] };
    _this.addUser = _this.addUser.bind(_this);
    return _this;
  }

  _createClass(UserContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      var self = this;
      var store = this.props.store;
      $.getJSON('/data.json').done(function (data) {
        store.dispatch({ type: 'GET_LIST', users: data.list });
      });

      store.subscribe(function () {
        var state = store.getState();
        self.setState({
          users: state.users
        });
      });
    }
  }, {
    key: 'addUser',
    value: function addUser() {
      var store = this.props.store;
      store.dispatch({
        type: 'ADD_USER',
        user: { name: "dummy dummy", email: 'dummy@icct.com' }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Users2.default, {
        users: this.state.users,
        addUser: this.addUser
      });
    }
  }]);

  return UserContainer;
}(_react2.default.Component);

exports.default = UserContainer;