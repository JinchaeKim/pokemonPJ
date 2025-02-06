const { combineReducers, createStore } = require("redux");

const rootReducer = combineReducers(); // input : moudles
const store = createStore(rootReducer);

export default store;
