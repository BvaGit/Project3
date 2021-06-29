import { createSelector } from "reselect";

export const getUserStore = (state) => state.user;

export const getUserFromStore = createSelector(
  getUserStore,
  (user) => user.user
);

export const getUserID = createSelector(getUserStore, (user) => {
  console.log(user);
  return user && user.id;
});

export const getUserToken = createSelector(getUserStore, (user) => user.token);
