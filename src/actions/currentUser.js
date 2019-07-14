// synchronous action creators 
export const currentUser = user => {
    return {
        type: 'CURRENT_USER',
        payload: user 
    }
}

 

// asynchronous action creators
export const login = credentials => {

    return dispatch => {
        return fetch('http://0.0.0.0:3000//api/login', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({name: 'grant'})
        })
    }  
}