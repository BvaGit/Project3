import React from 'react';
import { shallow, mount } from 'enzyme';
import ModalCreateChat from '../ModalCreateChat';
import { IntlProvider } from "react-intl";
import { Provider } from 'react-redux';


describe('ModalCreateChat', () => {
    let props;
    it("Should match snapshot", () => {
        props={users:[]}
        const component = shallowBiggerSmart(<ModalCreateChat {...props}/>)
        expect(component.html()).toMatchSnapshot()
    })
})

export const shallowBiggerSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    return shallow(<IntlProvider>{core}</IntlProvider>);
};