import { setUsers, authUsers } from "./actions";
import cookie from 'js-cookie';

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
    dispatch(authUsers(json))
  })
 }
}

export const ChangeCredits = () => {
  return (dispatch, getState) => {
    const user = getState().usersReducer;
    const changeCreds = getState().settings.fields;
    const id = user.users[0].id;
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
