export default (state = {names:[]}, action) => {
  console.log(action);
  let oldNames = state.names;
  switch (action.type) {
    case 'INIT':
      return {names: action.names};
    case 'ADD':
      let newNames = Object.assign([], oldNames);
      newNames.push(action.user);
      return {names: newNames};
    case 'DELETE':
      let copyNames = Object.assign([], oldNames);
      let id = parseInt(action.id);
      copyNames.splice(id,1);
      return {names: copyNames};
    default:
      return state;
  }
};