import React from 'react';
import { shallow, mount } from 'enzyme';
import MessageCounter from '../MessageCounter';


describe('MessageCounter', () => {
    it("Should match snapshot", () => {
        const component = shallow(<MessageCounter />)
        expect(component.html()).toMatchSnapshot()
    })
})