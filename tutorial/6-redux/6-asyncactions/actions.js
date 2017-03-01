export const MyActions = {
    INIT: 'INIT',
    ADD: 'ADD'
};

export function requestListOfNames() {
    const jq = require('jquery');    
    return jq.getJSON('http://scottpreston.github.io/html/data.json');
};

export function requestListOfNamesAsync(dispatch) { // returns function
   const jq = require('jquery');    
   jq.getJSON('http://scottpreston.github.io/html/data.json', (data) => dispatch(initAction(data.list)));
};

export function initAction(listOfNames) {
    // this is async, nothing to return except a promise
    return { type: MyActions.INIT, names: listOfNames };
};

export function addAction(newName) {
    console.log('newname',newName)
    return { type: MyActions.ADD, user: newName }
};