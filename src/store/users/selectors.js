import { createSelector } from "reselect";

export const getUsersStore = (state) => state.users;

export const getUsersFromStore = createSelector(
  getUsersStore,
  (users) => users.users
);
