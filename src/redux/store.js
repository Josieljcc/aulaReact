import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore as createStore } from "redux";
import reducer from "./reducers/reducer";

const store = createStore(reducer, composeWithDevTools());

export default store;
