import * as AT from "./actionTypes";

const initialState = {
  user: { id: null, token: null, userName: null },
  myAccount: {
    firstname: '',
    lastname: '',
    avatar: '',
    age: "0",
    city: '',
    company: '',
    hobbi: ''
  },
  isOpen: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.AUTH_USER:
      return {
        ...state,
        user: { ...action.payload },
      };
    case AT.USER_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          userName: action.payload
        }
      }
    case AT.LOGOUT_USER:
      return initialState;
    case AT.GET_MYACCOUNT:
      return {
        ...state,
        myAccount: action.payload
      };
    case AT.CHANGE_MYACCOUNT_FIELD:
      // eslint-disable-next-line no-case-declarations
      const account = {
        ...state.myAccount,
        ...action.payload
      }
      return {
        ...state,
        myAccount: account
      }
      case AT.CHANGE_MY_ACCOUNT_AVATAR:
        return {
          ...state,
          myAccount: {
            ...state.myAccount,
            avatar: action.payload,
          }
        }
      case AT.IS_OPEN:
        return {
          ...state,
          isOpen: !state.isOpen
        }
    default:
      return state;
  }
};
