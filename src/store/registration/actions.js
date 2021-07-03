import * as AT from "./actionTypes";

export const changeRegistrationField = (payload) => ({type: AT.CHANGE_REGISTRATION_FIELD, payload});
export const changeRegistrationFieldError = (payload) => ({type: AT.CHANGE_REGISTRATION_FIELD_ERROR, payload});
