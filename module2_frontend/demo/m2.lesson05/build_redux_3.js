// task 3: add subscribers
// store methods: getState, dispatch, subscribe
// actions: add item, clear, select, delete by index
'use strict';

// store creator
function createStore(reducer, initState) {
  let state = initState;
  const listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => {
      // TODO: notify all listeners
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

// store initial state
const initState = {
  items: [],
  selected: -1
};

// our only reducer
function itemsReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return Object.assign({}, state, {
        items: state.items.concat(action.payload)
      });

    case "CLEAR_ALL_ITEMS":
      return Object.assign({}, state, {items: []});

    case "SELECT_ITEM":
      return Object.assign({}, state, {selected: action.payload});

    case "DELETE_SELECTED_ITEM":
      return Object.assign({}, state, {
        selected: -1,
        items: state.items.filter((item, index) => index !== state.selected)
      });

    default:
      return state;
  }
}

const myStore = createStore(itemsReducer, initState);

// tests
(function () {
  const tests = [
    {description: 'notify on store change', pass: false, state: null},
  ];

  myStore.subscribe((state, action) => {
    console.log(`state has change because of action ${action.type}. new state: `, state);
    tests[0].state = state;
    tests[0].pass = true;
  });

  myStore.dispatch({
    type: "ADD_ITEM",
    payload: 'Tea cup'
  });

  tests.forEach((t, index) => console.log(`test ${index} pass: ${t.pass}`, t));
})();
