import * as AT from "./actionTypes";

export const setUsers = (payload) => ({
  type: AT.SET_USERS,
  payload,
});

export const authUsers = (payload) => ({type: AT.AUTH_USER, payload});

export const logoutUsers = () => ({type: AT.LOGOUT_USER});

export const changeMyAccountField = (payload) => ({type: AT.CHANGE_MYACCOUNT_FIELD, payload});

export const getMyAccount = (payload) => ({type: AT.GET_MYACCOUNT, payload});
