//synchronous action creators 
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user 
    }
}

//async action creators 
export const login = credentials => {
    return dispatch => {
       return fetch('http://localhost:3000/api/login', {
           credentials: "include",
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(credentials)
           
       })
       .then(response => response.json())
       .then(userData => dispatch(setCurrentUser(userData)))
    }
}

export const getCurrentUser = () => {
    return dispatch => {
       return fetch('http://localhost:3000/api/get_current_user', {
           credentials: "include",
           method: "GET",
           headers: {
               "Content-Type": "application/json"
           },           
       })
       .then(response => response.json())
       .then(response => dispatch(setCurrentUser(response)))
       .catch(console.log)
    }
}