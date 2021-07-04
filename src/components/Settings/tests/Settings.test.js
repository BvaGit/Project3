import React from 'react';
import { shallow, mount } from 'enzyme';
import Settings from '../Settings';


describe('Settings', () => {
    it("Should match snapshot", () => {
        const component = shallow(<Settings />)
        expect(component.html()).toMatchSnapshot()
    })
})