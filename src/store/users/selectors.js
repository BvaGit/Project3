import { createSelector } from "reselect";

export const getUserStore = (state) => state.usersReducer;

export const getUsersFromStore = createSelector(getUserStore, (users) => users.users);
