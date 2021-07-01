import { setUsers, authUsers, getMyAccount } from "./actions";
import cookie from 'js-cookie';



export const myAccountPOST = () => async (dispatch, getState) => {
  const user = getState().usersReducer;
  const id = user.users[0].id
  const myAccount = user.myAccount;
  console.log(myAccount," ---", id);
  await fetch(`http://localhost:3000/api/user/myaccount/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(myAccount)
  })
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
    const user = getState().usersReducer;
    const id = user.users[0].id
    return fetch(`http://localhost:3000/api/user/myaccount/avatar/${id}`, {
      method: "PUT",
      body: body
    })
  }
}

export const getUsersFromApi = () => {
  return (dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        dispatch(setUsers(json));
      });
  };
};

export const addToken = () => {
 const token = cookie.get('token');
 return (dispatch) => {
  return fetch('http://localhost:3000/api/user/addtoken/', {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  .then(data => data.json())
  .then(json => {
    dispatch(authUsers(json));
  })
 }
}
