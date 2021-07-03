import { createSelector } from "reselect";

import { getUserID } from "../user/selectors";

export const getUsersStore = (state) => state.users;

export const getUsersFromStore = createSelector(
  getUsersStore,
  (users) => users.users
);

export const getUsersForDropdown = createSelector(
  getUsersFromStore,
  getUserID,
  (users, userID) => users.filter((user) => user.id !== userID)
);

export const getUserLogin = createSelector(
  getUsersFromStore,
  getUserID,
  (users, userID) => users.find((user) => user.id === userID)
);
