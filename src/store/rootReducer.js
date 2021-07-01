import { combineReducers } from "redux";
import {connectRouter} from "connected-react-router";

import { language } from "./localization/reducer.js";
import { usersReducer } from "/src/store/users/reducer";
import { registrationReducer } from "/src/store/registration/reducer";
import { authReducer } from "/src/store/auth/reducer";
import { changeCreditsReducer } from '/src/store/settings/reducer';

const rootReducer = history => combineReducers({
  usersReducer,
  auth: authReducer,
  registration: registrationReducer,
  router: connectRouter(history),
  settings: changeCreditsReducer,
  language
});

export default rootReducer;
