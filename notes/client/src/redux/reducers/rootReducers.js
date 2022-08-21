import { combineReducers } from "redux";

import authReducer from "./authReducer";
import errorreducer from "./errorreducer";
import itemReducer from "./itemReducer";

export default combineReducers({
  item: itemReducer,
  error: errorreducer,
  auth: authReducer,
});
