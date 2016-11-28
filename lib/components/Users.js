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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Users = function (_React$Component) {
  _inherits(Users, _React$Component);

  function Users(props) {
    _classCallCheck(this, Users);

    var _this = _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).call(this, props));

    _this.renderUser = _this.renderUser.bind(_this);
    _this.reduxDispatch = _this.reduxDispatch.bind(_this);
    return _this;
  }

  _createClass(Users, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          null,
          ' ',
          this.props.users.map(this.renderUser),
          ' '
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.reduxDispatch },
          'Dispatch'
        )
      );
    }
  }, {
    key: 'renderUser',
    value: function renderUser(_ref, i) {
      var name = _ref.name,
          email = _ref.email;

      return _react2.default.createElement(
        'li',
        { key: i },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/users/' + i },
          name
        ),
        ' - ',
        email
      );
    }
  }, {
    key: 'reduxDispatch',
    value: function reduxDispatch() {
      var dummyUser = { name: "dummy dummy", email: 'dummy@icct.com' };
      this.props.addUser(dummyUser);
    }
  }]);

  return Users;
}(_react2.default.Component);

exports.default = Users;