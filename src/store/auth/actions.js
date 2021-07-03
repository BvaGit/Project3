import * as AT from "./actionTypes";

export const changeAuthField = (payload) => ({type: AT.CHANGE_AUTH_FIELD, payload});
export const changeAuthFieldError = (payload) => ({type: AT.CHANGE_AUTH_FIELD_ERROR, payload}); 
