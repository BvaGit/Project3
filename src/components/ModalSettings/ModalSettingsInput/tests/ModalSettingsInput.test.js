import React from 'react';
import { shallow, mount } from 'enzyme';
import ModalSettingsInput from '../ModalSettingsInput';
import { Provider } from 'react-redux';
import { IntlProvider } from "react-intl";


describe('Rooms', () => {   
    it("Should match snapshot", () => {
        
        const component = shallowBiggerSmart(<ModalSettingsInput />)
        expect(component.html()).toMatchSnapshot()
    })
})

export const shallowBiggerSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    return shallow(<IntlProvider >{core}</IntlProvider>);
};