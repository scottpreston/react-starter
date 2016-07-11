import * as types from '../constants/actionTypes';

export function addUser(list) {
  return {type: types.ADD_USER, list: list};
}

export function createUser(user) {
  return {type: types.CREATE_USER, user: user};
}
