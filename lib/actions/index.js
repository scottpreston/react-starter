'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUser = addUser;
exports.createUser = createUser;

var _actionTypes = require('../constants/actionTypes');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function addUser(list) {
  return { type: types.ADD_USER, list: list };
}

function createUser(user) {
  return { type: types.CREATE_USER, user: user };
}