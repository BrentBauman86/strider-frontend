//synchronous action creators 
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user 
    }
}

export const clearCurrentUser => {
    return {
        type: "CLEAR_CURRENT_USER"
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
       .catch(console.log)
<<<<<<< HEAD
    }
}

export const logout = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/api/logout', {
            credentials: "include",
            method: "DELETE"
        })
=======
>>>>>>> ef444268458354431a1fe9c95402c8d78d05ad92
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