import React from 'react';
import { shallow, mount } from 'enzyme';
import AuthInput from '../AuthInput';
import mapStateToProps from '../index'


describe('AuthInput', () => {
    it("Should match snapshot", () => {
        const component = shallow(<AuthInput />)
        expect(component).toMatchSnapshot()
    })
    // it('Should containe Input', () => {
    //     const onBlur = jest.fn()
    //     const onChange = jest.fn()
    //     const component = mount(<Input />);
    //     component.find('Input').toHaveLength(1)
    // });

    // it("Should have Input", () => {
    //     const component = mount(<AuthInput />)
    //     expect(component.find('Input')).toHaveLength(1)
    // })
})

describe('mapStateToProps', () =>{
    it('should be defined', function(){
        expect(mapStateToProps).toBeDefined()
    })
})