import { CHANGE_LANGUAGE } from "./actionTypes";

export const handleLanguage = (newLanguage) => ({
    type: CHANGE_LANGUAGE,
    payload: newLanguage
});
