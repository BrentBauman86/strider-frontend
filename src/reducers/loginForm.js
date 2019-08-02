import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'

// export default combineReducers({
//     form: formReducer
// }) 

const initialState = {
    name: "",
    password: ""
}

const loginReducer =(state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_LOGIN_FORM":
            return action.formData 
        default:
            return state
    }
}

export default loginReducer