import { createSelector } from 'reselect';

export const language = (state) => state.language;

export const languageValue = createSelector(
    language,
    (language) => language.value
)
