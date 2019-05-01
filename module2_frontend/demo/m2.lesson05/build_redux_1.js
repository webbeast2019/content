// task 1: implement basic store
// store methods: getState, dispatch
// actions: add item, clear
'use strict';

// store creator
function createStore(reducer, initState) {
  let state = initState;

  function getState() {
    return state;
  }

  function dispatch(action) {
    // TODO: set new state
    // state =
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
  switch (action.type) {
    case "ADD_ITEM":
      const items = state.items.concat(action.payload);
      return Object.assign({}, state, { items: items });

    case "CLEAR_ALL_ITEMS":
      return state; // TODO: implement

    default:
      return state;
  }
}

const myStore = createStore(itemsReducer, initState);

// tests
(function() {
  const tests = [
    {description: 'Add item', pass: false, state: null},
    {description: 'Clear All', pass: false, state: null}
  ];

  // test 1: add item
  myStore.dispatch({
    type: "ADD_ITEM",
    payload: 'item1'
  });
  tests[0].state = myStore.getState();
  tests[0].pass = tests[0].state.items.length === 1;

  // test 2: clear all items
  myStore.dispatch({
    type: "CLEAR_ALL_ITEMS"
  });
  tests[1].state = myStore.getState();
  tests[1].pass = tests[0].state.items.length > 0 && tests[1].state.items.length === 0;

  tests.forEach((t, index) => console.log(`test ${index} pass: ${t.pass}`, t));
})();
