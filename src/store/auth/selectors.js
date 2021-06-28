import { createSelector } from 'reselect';

export const getAuthStore = (state) => state.auth;
export const getAuthFieldsStore = createSelector(
    getAuthStore,
    (auth)=> auth.fields
) 
export const getAuthFieldByIdStore = createSelector(
    getAuthFieldsStore,
    (_state, props) => props.id,
    (fields, id) => fields[id]
)
export const getAuthErrorsStore = createSelector(
    getAuthStore,
    (auth)=> auth.errors
) 
export const getAuthErrorByIdStore = createSelector(
    getAuthErrorsStore,
    (_state, props) => props.id,
    (errors, id) => errors[id]
)

export const getIsValidAuthFields = createSelector(
    getAuthFieldsStore,
    getAuthErrorsStore,
    (fields, errors) => {
        if (Object.values(fields).every(field => !!field)) {
            return Object.values(errors).every(item => !item)
        }
        return false;
    },
) 
