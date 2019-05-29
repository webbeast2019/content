// task 2: implement additional actions
// store methods: getState, dispatch
// actions: add item, clear, select, delete by index
'use strict';

// store creator
function createStore(reducer, initState) {
  let state = initState;

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
  }

  return {
    getState: getState,
    dispatch: dispatch
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
      const items = state.items.concat(action.payload);
      return Object.assign({}, state, {items: items});

    case "CLEAR_ALL_ITEMS":
      return Object.assign({}, state, {items: []});

    case "SELECT_ITEM":
      return state; // TODO: implement

    case "DELETE_SELECTED_ITEM":
      return state; // TODO: implement

    default:
      return state;
  }
}

//  {
//    items ['Teas cup']
//  }
store.getState();

const myStore = createStore(itemsReducer, initState);

// tests
(function () {
  const tests = [
    {description: 'select item', pass: false, state: null},
    {description: 'delete selected item', pass: false, state: null}
  ];

  myStore.dispatch({
    type: "ADD_ITEM",
    payload: 'Tea cup'
  });
  myStore.dispatch({
    type: "ADD_ITEM",
    payload: 'Coffee mug'
  });
  myStore.dispatch({
    type: "ADD_ITEM",
    payload: 'Wine glass'
  });

  // test 1: select item
  myStore.dispatch({
    type: "SELECT_ITEM",
    payload: 2
  });
  tests[0].state = myStore.getState();
  tests[0].pass = tests[0].state.selected === 2;

  // test 2: delete selected item
  myStore.dispatch({
    type: "DELETE_SELECTED_ITEM"
  });
  tests[1].state = myStore.getState();
  const removedItem = tests[0].state.items[tests[0].state.selected];
  tests[1].pass = tests[1].state.items.length === tests[0].state.items.length - 1 &&
    !tests[1].state.items.includes(removedItem);

  tests.forEach((t, index) => console.log(`test ${index} pass: ${t.pass}`, t));
})();
