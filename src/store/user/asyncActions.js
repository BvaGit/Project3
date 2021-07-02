import { authUser } from "./actions";
import cookie from "js-cookie";

export const addToken = () => {
  const token = cookie.get("token");
  return (dispatch) => {
    return fetch("http://localhost:3000/api/user/addtoken/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((data) => data.json())
      .then((json) => {
        dispatch(authUser(json));
      });
  };
};

export const ChangeCredits = () => {
  return (dispatch, getState) => {
    const user = getState().user;
    console.log(user)
    const changeCreds = getState().settings.fields;
    const id = user.user.id;
    return fetch(`http://localhost:3000/api/user/updatelogpass/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(changeCreds)
    })
    .then(data => data.json())
    .then(json => {
      console.log(json)
    })
   }
}
