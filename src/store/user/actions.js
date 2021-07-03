import * as AT from "./actionTypes";

export const setUsers = (payload) => ({
  type: AT.SET_USERS,
  payload,
});

export const authUser = (payload) => ({ type: AT.AUTH_USER, payload });

export const logoutUser = () => ({ type: AT.LOGOUT_USER });

export const changeMyAccountField = (payload) => ({type: AT.CHANGE_MYACCOUNT_FIELD, payload});

export const getMyAccount = (payload) => ({type: AT.GET_MYACCOUNT, payload});

export const updateAvatar = (payload) => ({type: AT.CHANGE_MY_ACCOUNT_AVATAR, payload});

export const isOpen = () => ({type: AT.IS_OPEN});
