import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../Button';
import { Provider } from 'react-redux';
import { IntlProvider } from "react-intl";


describe('Button', () => {
    it("Should match snapshot", () => {
        const component = shallowBiggerSmart(<Button />)
        expect(component.html()).toMatchSnapshot()
    })
    it("Should have MainPage", () => {
        const component = mount(<button />)
        expect(component.find('button')).toHaveLength(1)
    })
})

export const shallowBiggerSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    return shallow(<IntlProvider >core</IntlProvider>);
};