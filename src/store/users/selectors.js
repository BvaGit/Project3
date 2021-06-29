import { createSelector } from "reselect";

export const getUsersStore = (state) => state.users;

export const getUsersFromStore = createSelector(getUsersStore, (users) => {
  console.log(users);
  return users.users;
});
