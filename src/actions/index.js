import * as types from '../constants/actionTypes';

export function getList(list) {
  return {type: types.GET_LIST, users: list};
}

export function addUser(user) {
  return {type: types.ADD_USER, user: user};
}

export function createUser(user) {
  return {type: types.CREATE_USER, user: user};
}
