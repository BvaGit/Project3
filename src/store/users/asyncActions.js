import { setUsers } from "./actions";
import cookie from "js-cookie";
import config from "../../constants/config";

export const getUsersFromApi = () => {
  const token = cookie.get("token");
  return (dispatch) => {
    return fetch(`${config.prod_url}/api/user/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
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
