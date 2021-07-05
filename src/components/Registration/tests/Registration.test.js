import React from 'react';
import { shallow, mount } from 'enzyme';
import Registration from '../Registration';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { IntlProvider } from "react-intl";
import { Router } from 'react-router-dom'

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


describe('Registration', () => {
    it("Should match snapshot", () => {
        const component = shallowBiggerSmart(<Registration />, store)
        expect(component.html()).toMatchSnapshot()
    })
})

export const shallowSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    return shallow(core);
};

export const shallowBiggerSmart = (component, store) => {
    const core = store
        ? <Provider store={store}><Router>{component}</Router></Provider>
        : component;
    return shallow(<IntlProvider>core</IntlProvider>);
};