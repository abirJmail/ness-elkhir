import { combineReducers } from "redux";
import userReducer from "./userReducer";
import reducerlist from "./reducerlist";

const rootReducer = combineReducers({
  userReducer: userReducer,
  reducerlist  : reducerlist,
});

export default rootReducer;
