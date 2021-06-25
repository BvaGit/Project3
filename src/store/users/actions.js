import * as AT from "./actionTypes";

export const setUsers = (payload) => ({
  type: AT.SET_USERS,
  payload,
});

export const authUsers = (payload) => ({type: AT.AUTH_USER, payload});

export const logoutUsers = () => ({type: AT.LOGOUT_USER});

export const changeRegistrationField = (payload) => ({type: AT.CHANGE_REGISTRATION_FIELD, payload});
export const changeRegistrationFieldError = (payload) => ({type: AT.CHANGE_REGISTRATION_FIELD_ERROR, payload});