import React from 'react';
import { shallow, mount } from 'enzyme';
import Logo from '../Logo';


describe('Logo', () => {
    it("Should match snapshot", () => {
        const component = shallow(<Logo />)
        expect(component).toMatchSnapshot()
    })
})