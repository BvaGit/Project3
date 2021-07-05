import React from 'react';
import { shallow, mount } from 'enzyme';
import SingleRoom from '../SingleRoom';


describe('SingleRoom', () => {
    let props;
    it("Should match snapshot", () => {
        props={room:{name:'global',chat_id:1}}
        const component = shallow(<SingleRoom {...props}/>)
        expect(component.html()).toMatchSnapshot()
    })
})