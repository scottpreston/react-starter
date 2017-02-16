export default (state = {names:[]}, action) => {
  switch (action.type) {
    case 'INIT':
      return {names: action.names};
    default:
      return state;
  }
}