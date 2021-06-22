import { setUsers, authUsers } from "./actions";

function readCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const getUsersFromApi = () => {
  return (dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        dispatch(setUsers(json));
      });
  };
};

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
        document.cookie = `token=${json.token}`
      }
    })
    
  }
}

export const addToken = () => {
 const token =  readCookie("token");
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



