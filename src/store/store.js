import { createStore, applyMiddleware } from "redux";
import { reducer } from "../redux/playerReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

export default store;
