import React from 'react';
import { shallow, mount } from 'enzyme';
import MessageInput from '../MessageInput';


describe('MessageInput', () => {
    let props;
    it("Should match snapshot", () => {
        props={rooms:{chat_id:1},socket:{emit:jest.fn()},userId:1, getUsersFromApi:jest.fn()}
        const component = shallow(<MessageInput {...props}/>)
        expect(component.html()).toMatchSnapshot()
    })
    it("Should change input", () => {
        props={rooms:{chat_id:1},socket:{emit:jest.fn()}, userId:1, getUsersFromApi:jest.fn()}
        const component = mount(<MessageInput {...props}/>)
        component.find('input').simulate("change", {target:{value:"value"}})
        expect(component.find('input').value).toBe()
    })
    it("Should click button", () => {
        props={rooms:{chat_id:1},socket:{emit:jest.fn()}, userId:1, getUsersFromApi:jest.fn()}
        const component = mount(<MessageInput {...props}/>)
        component.find('button').simulate('click')
        component.find('input').simulate("change", {target:{value:"value"}})
        component.find('button').simulate('click')
        expect(props.socket.emit).toHaveBeenCalled()
    })
})
 