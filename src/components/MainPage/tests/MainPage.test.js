import React from 'react';
import { shallow, mount } from 'enzyme';
import MainPage from '../MainPage';
import { connectRouter } from "connected-react-router";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { IntlProvider } from "react-intl";



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
        router: connectRouter(history),
        language: {
            value: 'en'
        },
    });


describe('MainPage', () => {
    it("Should match snapshot", () => {
        const component = shallowBiggerSmart(<MainPage />, store)
        expect(component.html()).toMatchSnapshot()
    })
    // it("Soulr render mainPage", ()=>{
    //   const component = mountBiggerSmart(<MainPage />, store)
    //   console.log(component.debug())
    // })
})


export const shallowBiggerSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    return shallow(<IntlProvider >core</IntlProvider>);
};

export const mountBiggerSmart = (component, store) => {
  const core = store
      ? <Provider store={store}>{component}</Provider>
      : component;
  return mount(<IntlProvider locale="en" messages={{}}>{core}</IntlProvider>);
};