// task 1
'use strict';

// store creator
function createStore(reducer, initState, middleware) {
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

function logger(store) {
  return function (next) {
    return function (action) {
      // log to console before dispatch
      console.log('store before dispatch', store.getState());

      // dispatch - implement
      const result = next(action);

      // log to console after dispatch
      console.log('store before dispatch', store.getState());

      return result
    }
  }
}

function crashReporterlogger(store) {
  return function (next) {
    return function (action) {
      try {
        return next(action);
      } catch (e) {
        console.error('Error on action: ', action, e);
      }
    }
  }
}

(function () {
  // initial state
  const initState = {
    items: ['Tea cup', 'Coffee mug'],
    selected: -1
  };

  const myStore = createStore(
    itemsReducer,
    initState,
    [logger, crashReportLogger]
  );

  myStore.dispatch({
    type: "ADD_ITEM",
    payload: 'Wine glass'
  });

})();
