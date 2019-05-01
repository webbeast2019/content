// task 1: implement basic store
// store methods: getState, dispatch
// actions: add item, clear
'use strict';

// store creator
function createStore(reducer, initState) {
  let state = initState;

  function getState() {
  }

  function dispatch(action) {
  }

  return {
    getState: getState,
    dispatch: dispatch
  };
}

// store initial state
const initState = {
  items: [],
};

// our only reducer
function itemsReducer(state, action) {
}

const myStore = createStore(itemsReducer, initState);
