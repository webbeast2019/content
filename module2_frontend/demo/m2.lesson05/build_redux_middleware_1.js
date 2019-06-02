// task 1 - implement middleware
'use strict';

// store creator
function createStore(reducer, initState, middleware) {
  let state = initState;
  const listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    // TODO?
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


(function () {
  // is this practical? how can we do this? should we change the function structure/return value?
  const middleware = (store) => {
    // log to console before dispatch
    console.log('store before dispatch', store.getState());

    // dispatch - implement

    // log to console after dispatch
    console.log('store before dispatch', store.getState());
  };

  // initial state
  const initState = {
    items: ['Tea cup', 'Coffee mug'],
    selected: -1
  };

  const myStore = createStore(itemsReducer, initState, middleware);

  myStore.dispatch({
    type: "ADD_ITEM",
    payload: 'Wine glass'
  });

})();
