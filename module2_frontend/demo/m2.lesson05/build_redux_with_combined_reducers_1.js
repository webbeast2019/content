// task 2: add subscribers
// store methods: getState, dispatch, subscribe
// actions: add item, clear, select, delete by index
'use strict';

// store creator
function createStore(reducer) {
  let state = reducer({}, {type: null});
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

// store items  initial state
const initItemsState = {
  items: [],
  selected: -1
};

// our only reducer
function itemsReducer(state = initItemsState, action) {
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

// store user initial state
const initUserState = {
  username: '',
  authenticated: false,
};

function userReducer(state = initUserState, action) {
  switch (action.type) {
    case "SET_USER":
      return Object.assign({}, state, {
        username: action.payload,
        authenticated: true
      });

    case "LOG_OUT":
      return Object.assign({}, state, initUserState);

    default:
      return state;
  }
}

function combineReducers(spec) {
  const keys = Object.keys(spec);

  return function (state, action) {
    // TODO: implement - apply all reducers
    return state;
  }
}

const myStore = createStore(combineReducers({
  items: itemsReducer,
  user: userReducer
}));

// tests
(function () {
  const tests = [
    {description: 'notify on store change', pass: false, state: null},
    {description: 'user log in', pass: false, state: null},
    {description: 'user log out', pass: false, state: null},
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

  myStore.dispatch({
    type: "SET_USER",
    payload: 'David'
  });
  tests[1].state = myStore.getState();
  tests[1].pass = tests[1].state.user.username === 'David' && tests[1].state.user.authenticated;

  myStore.dispatch({
    type: "LOG_OUT"
  });
  tests[2].state = myStore.getState();
  tests[2].pass = tests[2].state.user.username === '' && !tests[2].state.user.authenticated;

  tests.forEach((t, index) => console.log(`test ${index} pass: ${t.pass}`, t));
})();
