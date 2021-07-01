import * as AT from "./actionTypes";

export const setUsers = (payload) => ({
  type: AT.SET_USERS,
  payload,
});


export const changeMyAccountField = (payload) => ({type: AT.CHANGE_MYACCOUNT_FIELD, payload});

export const getMyAccount = (payload) => ({type: AT.GET_MYACCOUNT, payload});
