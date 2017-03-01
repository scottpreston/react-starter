export const MyActions = {
    INIT: 'INIT',
    ADD: 'ADD'
};

export function initAction(listOfNames) {
    return { type: MyActions.INIT, names: listOfNames };
};

export function addAction(newName) {
    console.log('newname',newName)
    return { type: MyActions.ADD, user: newName }
};