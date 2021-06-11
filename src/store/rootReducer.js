import { combineReducers } from "redux";

import { usersReducer } from "/src/store/users/reducer.js";

const rootReducer = combineReducers({
  usersReducer,
  // settingsReducer,
  // roomsReducer
});

export default rootReducer;
