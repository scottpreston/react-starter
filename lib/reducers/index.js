'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require('../constants/actionTypes');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var rootReducer = function rootReducer(initialState, action) {
  var reducer = [];
  console.log(initialState, action);
  reducer[_actionTypes.GET_LIST] = function () {
    var newList = action.users; // get data from action
    console.log('newlist', newList);
    return {
      users: newList
    }; // new state
  };

  reducer[_actionTypes.ADD_USER] = function () {
    var newUser = action.user; // get data from action
    return { users: [].concat(_toConsumableArray(initialState.users), [newUser]) }; // return new state
  };

  reducer[_actionTypes.CREATE_USER] = function () {
    return action.user;
  };

  if (reducer[action.type]) {
    return reducer[action.type]();
  } else {
    return { users: [] };
  }
};

exports.default = rootReducer;