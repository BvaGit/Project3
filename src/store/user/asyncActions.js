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
