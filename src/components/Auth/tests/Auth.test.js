import React from 'react';
import { shallow, mount } from 'enzyme';
import Auth from '../Auth';


describe('Auth', () => {
    it("Should match snapshot", () => {
        const component = shallow(<Auth />)
        expect(component).toMatchSnapshot()
    })
})
