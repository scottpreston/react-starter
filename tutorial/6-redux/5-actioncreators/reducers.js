import {MyActions} from './actions';

export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case MyActions.INIT:
      return {names: action.names};
    case MyActions.ADD:
      let oldNames = state.names;
      let newNames = Object.assign([], oldNames);
      newNames.push(action.user);
      return {names: newNames};
    default:
      return {names:[]};
  }
};