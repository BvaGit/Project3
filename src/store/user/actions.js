import * as AT from "./actionTypes";

export const setUsers = (payload) => ({
  type: AT.SET_USERS,
  payload,
});

export const authUser = (payload) => ({ type: AT.AUTH_USER, payload });

export const logoutUser = () => ({ type: AT.LOGOUT_USER });
