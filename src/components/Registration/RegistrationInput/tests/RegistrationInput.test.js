import React from 'react';
import { shallow, mount } from 'enzyme';
import RegistrationInput from '../RegistrationInput';
import { IntlProvider } from "react-intl";
import { Provider } from 'react-redux';




describe('RegistrationInput', () => {
    it("Should match snapshot", () => {
        const component = shallowBiggerSmart(<RegistrationInput />)
        expect(component.html()).toMatchSnapshot()
    })
})

export const shallowBiggerSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    return shallow(<IntlProvider>core</IntlProvider>);
};