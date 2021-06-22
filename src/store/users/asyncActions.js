import { setUsers, authUsers } from "./actions";

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
        localStorage.setItem('token', json.token);
      }
    })
    
  }
}

export const addToken = () => {
 return (dispatch) => {
  return fetch('http://localhost:3000/api/user/addtoken/', {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(data => data.json())
  .then(json => {
    console.log("json");
    dispatch(authUsers(json))
  })
 }
}



