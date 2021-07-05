import React from 'react';
import { shallow, mount } from 'enzyme';
import AuthInput from '../AuthInput';
import mapStateToProps from '../index'
import { Provider } from 'react-redux';
import { IntlProvider } from "react-intl";


describe('AuthInput', () => {
    it("Should match snapshot", () => {
        const component = shallow(<AuthInput />)
        expect(component).toMatchSnapshot()
    })
    it("Should change input", () => {
        let props={rooms:{chat_id:1},socket:{emit:jest.fn()}, userId:1,changeField:jest.fn(), messages:{length:2}}
        const component = mountBiggerSmart(<AuthInput {...props}/>)
        component.find('input').simulate("change", {target:{value:"value"}})
        expect(component.find('input').value).toBe()
    })
})

describe('mapStateToProps', () =>{
    it('should be defined', function(){
        expect(mapStateToProps).toBeDefined()
    })
})

const mountBiggerSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    return mount(<IntlProvider >{core}</IntlProvider>);
};