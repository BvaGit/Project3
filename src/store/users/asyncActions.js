import { setUsers } from "./actions";

export const getUsersFromApi = () => {
  return (dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        dispatch(setUsers(json));
      });
  };
};
