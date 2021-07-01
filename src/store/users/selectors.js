import { createSelector } from "reselect";

import { getUserID } from "../user/selectors";

export const getUsersStore = (state) => state.users;

export const getUsersFromStore = createSelector(
  getUsersStore,
  (users) => users.users
);

export const getUsersForDropdown = createSelector(
  getUsersStore,
  getUserID,
  (users, userID) => users.users.filter((user) => user.id !== userID)
);
