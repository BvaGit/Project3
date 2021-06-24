import { setUsers } from "./actions";

export const getUsersFromApi = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/user/users")
      .then((response) => response.json())
      .then((json) => {
        dispatch(setUsers(json));
        console.log(json);
      });
  };
};
