import { createSelector } from "reselect";

export const getUserStore = (state) => state.user;

export const getUserFromStore = createSelector(
  getUserStore,
  (state) => state.user,
);

export const getUserID = createSelector(getUserFromStore, (user) => user.id);
export const getUserToken = createSelector(getUserFromStore, (user) => user.token);
export const getUserName = createSelector(getUserFromStore, (user) => user.userName)

export const getUserMyAccount = createSelector(getUserStore, (state) => state.myAccount);
export const getUserAvatar = createSelector(getUserMyAccount, (myAccount) => myAccount.avatar);




