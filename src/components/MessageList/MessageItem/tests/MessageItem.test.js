import React from 'react';
import { shallow, mount } from 'enzyme';
import MessageItem from '../../MessageItem/MessageItem';



describe('MessageItem', () => {
    it("Should match snapshot", () => {
        const messages=[{message_id:1, id:1, content:'content', date_create:'12.34'}]
        const userId="1"
        const component = shallow(<MessageItem messages={messages} userId={userId}/>)
        expect(component.html()).toMatchSnapshot()
    })

}) 