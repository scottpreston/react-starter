import {ADD_USER, CREATE_USER, GET_LIST} from '../constants/actionTypes';

const rootReducer = function(initialState, action) {
  var reducer = [];
  console.log(initialState,action);
  reducer[GET_LIST]  = function () {
    var newList = action.users; // get data from action
    console.log('newlist',newList);
    return {
       users :newList
     }; // new state
  }

  reducer[ADD_USER]  = function () {
    var newUser = action.user; // get data from action
    return {users: [
        ...initialState.users,newUser
      ]}; // return new state
  }

  reducer[CREATE_USER]  = function () {
    return action.user;
  }

  if (reducer[action.type]) {
    return reducer[action.type]();
  } else {
    return {users:[]};
  }
}

export default rootReducer;
