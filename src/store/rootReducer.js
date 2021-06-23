import { combineReducers } from "redux";

import { usersReducer } from "/src/store/users/reducer.js";
import { roomsReducer } from "/src/store/rooms/reducer.js";

const rootReducer = combineReducers({
  usersReducer,
  roomsReducer,
    // settingsReducer,
});

export default rootReducer;
