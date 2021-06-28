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
