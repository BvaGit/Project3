import { SET_USERS, AUTH_USER, LOGOUT_USER } from "./actionTypes";

export const setUsers = (payload) => ({
  type: SET_USERS,
  payload,
});

export const authUsers = (payload) => ({type: AUTH_USER, payload});

export const logoutUsers = () => ({type: LOGOUT_USER});
