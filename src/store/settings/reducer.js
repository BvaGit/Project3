import * as AT from './actionTypes';

const initialState = {
    fields: {
        login: '',
        password: ''
    }
}

export const changeCreditsReducer = (state = initialState, action) => {
    switch (action.type) {
        case AT.CHANGE_CREDITS:
            const newCredits = {
                ...state.fields,
                ...action.payload
            }
            return {
                ...state, 
                fields: newCredits
            }
           
        default: 
            return state;
    }
}
