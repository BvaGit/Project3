import { createSelector } from "reselect";

export const getUserStore = (state) => state.user;

export const getUserFromStore = createSelector(
  getUserStore,
  (state) => state.user,
);



export const getUserID = createSelector(getUserFromStore, (user) => user.id);

export const getUserToken = createSelector(getUserFromStore, (user) => user.token);

export const getUserMyAccount = createSelector(getUserStore, (state) => state.myAccount);

export const getUserAvatar = createSelector(getUserMyAccount, (myAccount) => myAccount.avatar);
export const getUserName = createSelector(getUserMyAccount, (myAccount) => myAccount.firstname);



