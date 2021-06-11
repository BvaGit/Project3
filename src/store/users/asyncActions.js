import { setUsers } from "./actions";

export const getUsersFromApi = () => {
  return (dispatch, state) => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch(setUsers(json));
      });
  };
};
