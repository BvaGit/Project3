import React from 'react';
import { shallow, mount } from 'enzyme';
import MessagesContainer from '../MessagesContainer';
import { Provider } from 'react-redux';
import { IntlProvider } from "react-intl";


describe('MessagesContainer', () => {
    it("Should match snapshot", () => {
        const component = shallowBiggerSmart(<MessagesContainer />)
        expect(component.html()).toMatchSnapshot()
    })
})

export const shallowBiggerSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    return shallow(<IntlProvider >{core}</IntlProvider>);
};