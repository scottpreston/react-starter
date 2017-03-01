export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'INIT':
      return {names: action.names};
    case 'ADD':
      let oldNames = state.names;
      let newNames = Object.assign([], oldNames);
      newNames.push(action.user);
      return {names: newNames};
    default:
      return {names:[]};
  }
};