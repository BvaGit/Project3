import { combineReducers } from "redux";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  usersReducer,
  // settingsReducer,
  // roomsReducer
});

export default rootReducer;
