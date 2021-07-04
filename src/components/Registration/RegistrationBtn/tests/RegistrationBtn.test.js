import React from 'react';
import { shallow, mount } from 'enzyme';
import RegistrationBtn from '../RegistrationBtn';


describe('RegistrationBtn', () => {
    it("Should match snapshot", () => {
        const component = shallow(<RegistrationBtn />)
        expect(component.html()).toMatchSnapshot()
    })
})