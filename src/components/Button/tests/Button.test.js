import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../Button';


describe('Button', () => {
    it("Should match snapshot", () => {
        const component = shallow(<Button />)
        expect(component.html()).toMatchSnapshot()
    })
    it("Should have MainPage", () => {
        const component = mount(<button />)
        expect(component.find('button')).toHaveLength(1)
    })
})