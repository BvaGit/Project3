import React from 'react';
import { shallow, mount } from 'enzyme';
import Rooms from '../Rooms';
import { Provider } from 'react-redux';
import { IntlProvider } from "react-intl";




describe('Rooms', () => {
    let props;
    it("Should match snapshot", () => {
        props={rooms:[]}
        const component = shallowBiggerSmart(<Rooms {...props}/>)
        expect(component.html()).toMatchSnapshot()
    })
})

export const shallowBiggerSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    return shallow(<IntlProvider >core</IntlProvider>);
};