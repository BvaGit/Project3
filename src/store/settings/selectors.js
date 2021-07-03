import { createSelector } from 'reselect';

export const getSettingsStore = (state) => state.settings;

export const getSettingsLoginStore = createSelector(
    getSettingsStore,
    (settings) => settings.login
)
export const getSettingsPasswordStore = createSelector(
    getSettingsStore,
    (settings) => settings.password
)
