import React from 'react';
import { shallow, mount } from 'enzyme';
import Title from '../Title';


describe('Title', () => {
    it("Should match snapshot", () => {
        const component = shallow(<Title />)
        expect(component.html()).toMatchSnapshot()
    })
})