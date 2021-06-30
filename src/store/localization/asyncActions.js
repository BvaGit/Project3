// export const setLocalization = () => async (dispatch, getState) => {
//     const state = getState();
//     const user = state.usersReducer.users && state.usersReducer.users[0];
//     const token = user.token;
//     const body = {};

//     const response = await fetch("http://localhost:3000/api/user/getmyaccount/1",{
//         method: "GET",
//         headers: {
//             "Content-type": "application/json; charset=utf-8",
//             'Authorization': `Bearer ${token}`
//         }
//     })
//     const json = await response.json();

//     console.log(state, token, json);
// };