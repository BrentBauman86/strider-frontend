import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import usersReducer from './reducers/users'
import thunk  from 'redux-thunk';
import currentUser from './reducers/currentUser.js'
import loginReducer from './reducers/loginForm.js'

const reducer = combineReducers({
    usersReducer,
    currentUser,
    loginReducer
})

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store 