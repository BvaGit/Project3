import { createSelector } from "reselect";

export const getUserStore = (state) => state.user;

export const getUserFromStore = createSelector(
  getUserStore,
  (state) => state.user
);

export const getUserID = createSelector(getUserFromStore, (user) => user.id);

export const getUserToken = createSelector(
  getUserFromStore,
  (user) => user.token
);
