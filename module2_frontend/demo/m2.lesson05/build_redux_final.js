// task 2: add subscribers
// store methods: getState, dispatch, subscribe
// actions: add item, clear, select, delete by index
'use strict';

// store creator - we can still provide initial state
function createStore(reducer, initState) {
  let state = initState;
  const listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => {
      listener(state, action);
    });
  }

  function subscribe(callbackFn) {
    listeners.push(callbackFn);
  }

  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe
  };
}


// items initial state
const itemsInitState = {
  items: ['Tea cup', 'Coffee mug'],
  selected: -1
};

// our only reducer
function itemsReducer(state = itemsInitState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return Object.assign({}, state, {
        items: state.items.concat(action.payload)
      });

    case "CLEAR_ALL_ITEMS":
      return Object.assign({}, state, { items: [] });

    case "SELECT_ITEM":
      return Object.assign({}, state, { selected: action.payload });

    case "DELETE_SELECTED_ITEM":
      return Object.assign({}, state, {
        selected: -1,
        items: state.items.filter((item, index) => index !== state.selected)
      });

    default:
      return state;
  }
}

