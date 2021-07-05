import React from 'react';
import { shallow, mount } from 'enzyme';
import MessageInput from '../MessageInput';
import { Provider } from 'react-redux';
import { IntlProvider } from "react-intl";


describe('MessageInput', () => {
    let props;
    it("Should match snapshot", () => {
        props={rooms:{chat_id:1},socket:{emit:jest.fn()},userId:1, getUsersFromApi:jest.fn(), messages:{length:2}}
        const component = shallowBiggerSmart(<MessageInput {...props}/>)
        expect(component.html()).toMatchSnapshot()
    })
    it("Should change input", () => {
        props={rooms:{chat_id:1},socket:{emit:jest.fn()}, userId:1, getUsersFromApi:jest.fn(), messages:{length:2}}
        const component = mountBiggerSmart(<MessageInput {...props}/>)
        component.find('input').simulate("change", {target:{value:"value"}})
        expect(component.find('input').value).toBe()
    })
    it("Should click button", () => {
        props={rooms:{chat_id:1},socket:{emit:jest.fn()}, userId:1, getUsersFromApi:jest.fn(), messages:{length:2}}
        const component = mountBiggerSmart(<MessageInput {...props}/>)
        component.find('button').simulate('click')
        component.find('input').simulate("change", {target:{value:"value"}})
        component.find('button').simulate('click')
        expect(props.socket.emit).toHaveBeenCalled() 
    })
})
 
export const shallowBiggerSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    return shallow(<IntlProvider >{core}</IntlProvider>);
};

const mountBiggerSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    return mount(<IntlProvider >{core}</IntlProvider>);
};