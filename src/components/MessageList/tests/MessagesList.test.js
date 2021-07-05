import React from 'react';
import { shallow, mount } from 'enzyme';
import MessagesList from '../MessagesList';


describe('MessagesList', () => {
    it("Should match snapshot", () => {
        const component = shallow(<MessagesList />)
        expect(component).toMatchSnapshot()
    })
})