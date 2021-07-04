import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Input from '../Input';

const mockStore = configureStore();
const store = mockStore(
    {  labelId: 3, id: 3, type: "text", name: 2, value: "value", title:'ghj', placeholderId:'uhkj', minLength:2, maxLength:5}
);


describe('Input', () => {
    it("Should match snapshot", () => {
        const component = shallow(<Input />)
        expect(component).toMatchSnapshot()
    })
    it('should be defined', function(){
        expect(Input).toBeDefined()
    })
    it('should be defined', function(){
        expect(typeof Input).toBe('function')
    })
    it("Should have label", () => {
        const component = mount(<label />)
        expect(component.find('label')).toHaveLength(1)
    })
    it('Should have Movies', () => {
        const onBlur = jest.fn()
        const onChange = jest.fn()
        const component = mountSmart(<input
            labelId={"text"} 
            id={2} 
            type={'text'} 
            name={2} 
            value={'value'} 
            title={'ghj'} 
            placeholderId={'uhkj'} 
            minLength={2} 
            maxLength={5} 
            onBlur={onBlur} 
            onChange={onChange}
        />, store);
        expect(component.find('input')).toHaveLength(1);
    });
})

const mountSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    return mount(core);
};