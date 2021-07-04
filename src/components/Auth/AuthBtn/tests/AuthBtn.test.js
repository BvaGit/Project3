import React from 'react';
import { shallow, mount } from 'enzyme';
import AuthBtn from '../AuthBtn'
import mapStateToProps from '../index'

describe('AuthBtn', () => {
    it("Should match snapshot", () => {
        const component = shallow(<AuthBtn />)
        expect(component).toMatchSnapshot()
    })
})

describe('mapStateToProps', () =>{
    it('should be defined', function(){
        expect(mapStateToProps).toBeDefined()
    })
})