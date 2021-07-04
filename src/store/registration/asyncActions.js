import history from "../../helpers/history";
import { getRegFieldByIdStore } from "./selectors";
import { errorNotification, successNotification } from "../../helpers/notification";
import config from "../../constants/config";

export const regAuthRequest = () => async (dispatch, getState) => {
  const state = getState();
  const body = {
    login: getRegFieldByIdStore(state, {id: 'login'}),
    password: getRegFieldByIdStore(state, {id: 'password'}),
  };
  const response = await fetch(`${config.prod_url}/api/user/reg`,{
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(body)
  });
  if (response.status === 201) {
    history.push('/');
    successNotification('You are register successfully');
  } else {
    errorNotification();
  }
}
