import React from 'react';
import { shallow, mount } from 'enzyme';
import ModalSettings from '../ModalSettings';
import { IntlProvider } from "react-intl";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';



const mockStore = configureStore();
const store = mockStore()


describe('ModalSettings', () => {
    it("Should match snapshot", () => {
        const component = shallowBiggerSmart(<ModalSettings />, store)
        expect(component.html()).toMatchSnapshot()
    })
})

export const shallowBiggerSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    return shallow(<IntlProvider>{core}</IntlProvider>);
};