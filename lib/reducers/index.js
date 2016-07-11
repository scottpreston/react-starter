'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require('../constants/actionTypes');

var rootReducer = function rootReducer(initialState, action) {
  var reducer = [];
  reducer[_actionTypes.ADD_USER] = function () {
    return action.list;
  };
  reducer[_actionTypes.CREATE_USER] = function () {
    return action.user;
  };
  if (reducer[action.type]) {
    return reducer[action.type]();
  } else {
    return [];
  }
};

exports.default = rootReducer;