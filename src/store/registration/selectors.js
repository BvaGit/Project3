import { createSelector } from 'reselect';

export const getRegStore = (state) => state.registration;
export const getRegFieldsStore = createSelector(
    getRegStore,
    (registration)=> registration.fields
) 
export const getRegFieldByIdStore = createSelector(
    getRegFieldsStore,
    (_state, props) => props.id,
    (fields, id) => fields[id]
)
export const getRegErrorsStore = createSelector(
    getRegStore,
    (registration)=> registration.errors
) 
export const getRegErrorByIdStore = createSelector(
    getRegErrorsStore,
    (_state, props) => props.id,
    (errors, id) => errors[id]
)

export const getIsValidRegFields = createSelector(
    getRegFieldsStore,
    getRegErrorsStore,
    (fields, errors) => {
        if (Object.values(fields).every(field => !!field)) {
            return Object.values(errors).every(item => !item)
        }
        return false;
    },
) 
