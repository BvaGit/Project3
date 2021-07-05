import React from 'react';
import { shallow, mount } from 'enzyme';
import MentionPin from '../index';


describe('MentionPin', () => {
    it("Should match snapshot", () => {
        const component = shallow(<MentionPin />)
        expect(component.html()).toMatchSnapshot()
    })
})