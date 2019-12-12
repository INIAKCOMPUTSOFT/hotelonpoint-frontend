import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import thunk from "redux-thunk";
import uiReducers from "./reducers/uiReducers";
import userReducer from "./reducers/userReducer";

const initialState = {};

const middleware = [thunk];

const reducer = combineReducers({
  user: userReducer,
  UI: uiReducers
});

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


export default store;