import React from 'react';
import { shallow, mount } from 'enzyme';
import MessagesContainer from '../MessagesContainer';


describe('MessagesContainer', () => {
    it("Should match snapshot", () => {
        const component = shallow(<MessagesContainer />)
        expect(component.html()).toMatchSnapshot()
    })
})