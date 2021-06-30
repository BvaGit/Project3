import { CHANGE_LANGUAGE } from "./actionTypes";

import { SAVE_LANGUAGE } from "./actionTypes";
import { SAVE_THEME } from "./actionTypes";

export function handleLanguage(newLanguage) {
    return {
        type: CHANGE_LANGUAGE,
        payload: newLanguage
    }
}

export function handleSaveLanguage(newLanguage) {
    return {
        type: SAVE_LANGUAGE,
        payload: newLanguage
    }
}

export function handleSaveTheme(newLanguage) {
    return {
        type: SAVE_THEME,
        payload: newLanguage
    }
}