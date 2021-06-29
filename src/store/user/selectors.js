import { createSelector } from "reselect";

export const getUserStore = (state) => state.user;

export const getUserFromStore = createSelector(
  getUserStore,
  (user) => user.user
);
