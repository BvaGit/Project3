import { combineReducers } from "redux";
import { usersReducer } from "./users/reducer";

const rootReducer = combineReducers({
  usersReducer,
  // settingsReducer,
  // roomsReducer
});

export default rootReducer;
