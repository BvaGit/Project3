import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { IntlProvider } from "react-intl";
import { Router } from 'react-router-dom'


import Auth from '../Auth';
import configureStore from 'redux-mock-store';


const mockStore = configureStore();
const store = mockStore({
    auth : {
        fields: {
          login: "",
          password: "",
        },
        errors: {
          login: "",
          password: "",
        }
      },
    rooms: {
        sendingMessage: false,
        messages: {
          0: [
            {
              text: "Welcome!",
            },
          ],
        },
        socket: null,
        rooms: {},
        activeRoom: "",
      },
      user:{
        user: { id: null, token: null },
      },
      users: {
        users: [],
      },
      registration: {
        fields:{
          login: '',
          password: '',
          confirm_password:""
        },
        errors:{
          login:"",
          password:"",
          confirm_password:""
        }
      },
      location: {value: 'en'}
    });


describe('Auth', () => {
    it("Should match snapshot", () => {
        const component = shallow(<Auth />)
        expect(component).toMatchSnapshot()
    })
    // it("Should have MainPage", () => {
    //     const component = mountBiggerSmart(<Auth />, store)
    //     expect(component.find('div')).toHaveLength(1)
    //   })
})

const mountSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    return mount(core);
  };

  const mountBiggerSmart = (component, store) => {
    const core = store
        ? <Provider store={store}><Router>{component}</Router></Provider>
        : component;
    return mount(<IntlProvider >{core}</IntlProvider>);
};