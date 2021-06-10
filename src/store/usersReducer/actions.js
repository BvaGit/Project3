import { SET_USERS } from "./constants";

export const setUsers = (payload) => ({
  type: SET_USERS,
  payload,
});

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
