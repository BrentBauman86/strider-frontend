import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import usersReducer from './reducers/users.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  runForm  from './components/runForm.js';
import store from './store.js'

// const Login = () => {
//     return (
//       <div>
//         <form>
//           <div>
//             <input type="text" name="username" placeholder="Username" />
//             <label htmlFor="username">Username</label>
//           </div>
//           <div>
//             <input type="password" name="password" placeholder="Password" />
//             <label htmlFor="password">Password</label>
//           </div>
//           <input type="submit" value="Login" />
//         </form>
//       </div>
//     );
//   };

ReactDOM.render(
<Provider store={ store }>
    <App>
    </App>
        <Router>
            <Route path='/run' component={runForm} />
        </Router>
</Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
