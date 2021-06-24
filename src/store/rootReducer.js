import { combineReducers } from "redux";

import { usersReducer } from "/src/store/users/reducer.js";
import { language } from "./localization/reducer.js";

const rootReducer = combineReducers({
  usersReducer,
  language
  // settingsReducer,
  // roomsReducer
});

export default rootReducer;
