import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer/reducers";

const rootReducer = combineReducers({
  usersReducer,
  // settingsReducer,
  // roomsReducer
});

export default rootReducer;
