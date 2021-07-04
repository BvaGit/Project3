import cookie from "js-cookie";

import history from "../../helpers/history";
import { authUser } from "../user/actions";
import { getAuthFieldByIdStore } from "./selectors";
import {
  errorNotification,
  successNotification,
} from "../../helpers/notification";
import prod_url from "../../constants/config";

export const authUserRequest = () => async (dispatch, getState) => {
  const state = getState();
  const body = {
    login: getAuthFieldByIdStore(state, { id: "login" }),
    password: getAuthFieldByIdStore(state, { id: "password" }),
  };
  const response = await fetch(`${prod_url}/api/user/auth`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(body),
  });
  const json = await response.json();
  if (json.token) {
    dispatch(authUser(json));
    cookie.set("token", json.token);
    history.push("/main");
    successNotification("You are auth successfully");
  } else {
    errorNotification();
  }
};
