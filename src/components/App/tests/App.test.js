import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

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
      }
    });


describe('App', () => {
    it("Should match snapshot", () => {
        const component = shallowSmart(<App /> , store)
        expect(component.html()).toMatchSnapshot()
    })
})

export const shallowSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    return shallow(core);
};