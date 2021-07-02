import * as AT from "./actionTypes";

export const authUser = (payload) => ({ type: AT.AUTH_USER, payload });

export const logoutUser = () => ({ type: AT.LOGOUT_USER });
