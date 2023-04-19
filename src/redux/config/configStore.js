import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";

import todoReducer from "redux/modules/todos";

const rootReducer = combineReducers({
    todoReducer,
});
const store = createStore(rootReducer);

export default store;
