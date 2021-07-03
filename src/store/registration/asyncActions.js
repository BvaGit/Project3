import history from "../../helpers/history";
import { getRegFieldByIdStore } from "./selectors";
import { errorNotification, successNotification } from "../../helpers/notification";

export const regAuthRequest = () => async (dispatch, getState) => {
  const state = getState();
  const body = {
    login: getRegFieldByIdStore(state, {id: 'login'}),
    password: getRegFieldByIdStore(state, {id: 'password'}),
  };
  const response = await fetch("http://localhost:3000/api/user/reg",{
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
