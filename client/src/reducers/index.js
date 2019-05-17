import { combineReducers } from "redux";
import auth from "./auth";
import poll from "./poll";

export default combineReducers({
  auth,
  poll
});
