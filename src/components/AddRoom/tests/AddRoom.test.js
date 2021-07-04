import React from 'react';
import { shallow, mount } from 'enzyme';
import AddRoom from '../AddRoom';
import ReactDOM from 'react-dom';

jest.mock('react-dom',()=>({createPortal:jest.fn().mockReturnValue('<div></div>')}))

describe('AddRoom', () => {
    it("Should match snapshot", () => {
        const component = shallow(<AddRoom />)
        expect(component.html()).toMatchSnapshot()
    })
    it("Should", ()=>{
        const component = mount(<AddRoom />)
        console.log(component.debug())
        component.find(".add-room").simulate("click")
        expect(component.find("CustomModal")).toHaveLength(1)
    })
})