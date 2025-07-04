import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { postsReducer } from "./reducers";

const rootReducers = combineReducers({
    posts: postsReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));

export * from "./actions";