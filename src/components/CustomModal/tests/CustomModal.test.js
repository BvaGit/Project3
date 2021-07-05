import React from 'react';
import { shallow, mount } from 'enzyme';
import CustomModal from '../CustomModal';


describe('CustomModal', () => {
    it("Should match snapshot", () => {
        const component = shallow(<CustomModal />)
        expect(component).toMatchSnapshot()
    })
})