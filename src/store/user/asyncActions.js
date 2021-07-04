import cookie from "js-cookie";

import {
  authUser,
  getMyAccount,
  updateAvatar,
  isOpen,
  userName,
} from "./actions";
import prod_url from "../../constants/config";

export const addToken = () => {
  const token = cookie.get("token");
  return (dispatch) => {
    return fetch(`${prod_url}/api/user/addtoken/`, {
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

export const updateMyAccount = () => async (dispatch, getState) => {
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
  .then( data => data.json() )
}

export const myAccountPOST = () => async (dispatch, getState) => {
  const user = getState().user;
  const id = user.user.id;
  const myAccount = user.myAccount;
  await fetch(`${prod_url}/api/user/myaccount/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(myAccount),
  })
    .then((data) => data.json())
    .then((json) => {
      dispatch(userName(json.firstname));
      dispatch(isOpen());
    });
};

export const myAccountGET = () => {
  const token = cookie.get("token");
  return (dispatch) => {
    return fetch(`${prod_url}/api/user/getmyaccount/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((data) => data.json())
      .then((json) => {
        dispatch(getMyAccount(json[0]));
        dispatch(userName(json[0].firstname));
      });
  };
};

export const avatarPUT = (body) => {
  return (dispatch, getState) => {
    const user = getState().user;
    const id = user.user.id;
    return fetch(`${prod_url}/api/user/myaccount/avatar/${id}`, {
      method: "PUT",
      body: body,
    })
      .then(() => {
        setTimeout(
          () =>
            fetch(`${prod_url}/api/user/myaccount/getavatar/${id}`)
              .then((data) => data.json())
              .then((json) => {
                dispatch(updateAvatar(json));
              }),
          300
        );
      })
      .catch((e) => console.log(e));
  };
};
