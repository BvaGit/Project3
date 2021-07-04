import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { userReducer } from "/src/store/user/reducer.js";
import { usersReducer } from "/src/store/users/reducer.js";
import { roomsReducer } from "/src/store/rooms/reducer.js";
import { language } from "./localization/reducer.js";
import { registrationReducer } from "/src/store/registration/reducer";
import { authReducer } from "/src/store/auth/reducer";
import { changeCreditsReducer } from '/src/store/settings/reducer';

const rootReducer = (history) =>
  combineReducers({
    rooms: roomsReducer,
    user: userReducer,
    users: usersReducer,
    auth: authReducer,
    registration: registrationReducer,
    router: connectRouter(history),
    settings: changeCreditsReducer,
    language,
});


export default rootReducer;
