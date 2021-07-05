import React from 'react';
import { shallow, mount } from 'enzyme';
import RoomsHeader from '../RoomsHeader';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { IntlProvider } from "react-intl";

const mockStore = configureStore();
const store = mockStore(
    
);

describe('RoomsHeader', () => {
    it("Should match snapshot", () => {
        const component = shallowBiggerSmart(<RoomsHeader />, store)
        expect(component.html()).toMatchSnapshot()
    })
})

export const shallowSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    return shallow(core);
};

export const shallowBiggerSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    return shallow(<IntlProvider>core</IntlProvider>);
};