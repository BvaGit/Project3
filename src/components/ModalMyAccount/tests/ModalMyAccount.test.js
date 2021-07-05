import React from 'react';
import { shallow, mount } from 'enzyme';
import ModalMyAccount from '../ModalMyAccount';
import { IntlProvider } from "react-intl";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';


const mockStore = configureStore();
const store = mockStore({
    user:{
        myAccount : 
        {  avatar: ''}
    }
});

describe('ModalMyAccount', () => {
    it("Should match snapshot", () => {
        const component = shallowBiggerSmart(<ModalMyAccount />, store)
        expect(component.html()).toMatchSnapshot()
    })
})

export const shallowBiggerSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    return shallow(<IntlProvider>{core}</IntlProvider>);
};

// export const shallowSmart = (component, store) => {
//     const core = store
//         ? <Provider store={store}>{component}</Provider>
//         : component;
//     return shallow(core);
// };