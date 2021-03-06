const VM = require('scratch-vm');
const Storage = require('../lib/storage');

const SET_VM = 'scratch-gui/vm/SET_VM';
const defaultVM = new VM();
defaultVM.attachStorage(new Storage());
const initialState = defaultVM;

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case SET_VM:
        return action.vm;
    default:
        return state;
    }
};
reducer.setVM = function (vm) {
    return {
        type: SET_VM,
        vm: vm
    };
};
module.exports = reducer;
