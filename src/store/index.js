import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { thunk } from "redux-thunk";
import { postsReducer } from "./reducers";
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducers = combineReducers({
    posts: postsReducer,
});

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export * from "./actions";