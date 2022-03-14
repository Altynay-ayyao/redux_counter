import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";//makes it possible to use browser dev tool
import reducer from "./reducer";

const store = createStore(reducer, composeWithDevTools());

export default store;

//