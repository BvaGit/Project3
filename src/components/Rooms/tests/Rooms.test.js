import React from 'react';
import { shallow, mount } from 'enzyme';
import Rooms from '../Rooms';




describe('Rooms', () => {
    let props;
    it("Should match snapshot", () => {
        props={rooms:[]}
        const component = shallow(<Rooms {...props}/>)
        expect(component.html()).toMatchSnapshot()
    })
})