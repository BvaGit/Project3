import { createSelector } from 'reselect';

export const getUsersStore = (state) => state.usersReducer;
export const getRegStore = createSelector(
    getUsersStore,
    (users)=> users.registration
)
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