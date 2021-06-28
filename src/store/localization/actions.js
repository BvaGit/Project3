import { CHANGE_LANGUAGE } from "./actionTypes"

export function handleLanguage(newLanguage) {
    return {
        type: CHANGE_LANGUAGE,
        payload: newLanguage
    }
}
