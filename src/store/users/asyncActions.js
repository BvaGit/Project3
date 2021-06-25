import { setUsers, authUsers } from "./actions";
import cookie from 'js-cookie';

export const getUsersFromApi = () => {
  return (dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        dispatch(setUsers(json));
      });
  };
};

export const regAuthRequest = () => {
   // SELECT LOGIN AND PASSWORD FROM STORE BY SELECTOR!!!!
  return (fetch("http://localhost:3000/api/user/reg",{
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(body)
  })
  .then(() => {
    return true
  }))
}

export const authUserRequest = (body) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/user/auth",{
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(body)
    })
    .then(data => {
      if(data.ok){
        return data.json();
      } else {
        return false;
      }
    }).then((json) => {
      if(json){
        dispatch(authUsers(json))
        cookie.set('token', json.token);
      }
    })
    
  }
}

export const addToken = () => {
 const token = cookie.get('token');
 return (dispatch) => {
  return fetch('http://localhost:3000/api/user/addtoken/', {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  .then(data => data.json())
  .then(json => {
    dispatch(authUsers(json))
  })
 }
}



