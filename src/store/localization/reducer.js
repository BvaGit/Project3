import { CHANGE_LANGUAGE } from "./actionTypes";

const initialLanguageState = {
    value: 'en'
}

export const language = (state = initialLanguageState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE: 
            return {...state, value: action.payload}
        default: return state;
    }
}
