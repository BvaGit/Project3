import { authUser, getMyAccount, updateAvatar, isOpen } from "./actions";
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

export const myAccountPOST = () => async (dispatch, getState) => {
  const user = getState().user;
  const id = user.user.id
  const myAccount = user.myAccount;
  await fetch(`http://localhost:3000/api/user/myaccount/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(myAccount)
  })
  .then(() => dispatch(isOpen()));
}

export const myAccountGET = () => {
  const token = cookie.get('token');
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/user/getmyaccount/`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then((data) => data.json())
    .then((json) => {
      dispatch(getMyAccount(json[0]));
    });
  }
}


export const avatarPUT = (body) => {
  return (dispatch, getState) => {
    const user = getState().user;
    const id = user.user.id
    return fetch(`http://localhost:3000/api/user/myaccount/avatar/${id}`, {
      method: "PUT",
      body: body
    })
    .then(() => {
      fetch(`http://localhost:3000/api/user/myaccount/getavatar/${id}`)
      .then((data) => data.json())
      .then(json => {
        dispatch(updateAvatar(json))
      })
    })
    .catch(e => console.log(e))
  }
}


