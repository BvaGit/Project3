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
