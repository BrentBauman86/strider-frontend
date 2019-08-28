import React from 'react'
import { connect } from 'react-redux' 
import { login } from "../actions/currentUser.js"
import { updateLoginForm } from '../actions/loginForm.js'

const Login = ({ loginFormData, updateLoginForm, login}) => {
    const handleInputChange = event => {
        console.log(loginFormData)
        const { name, value } = event.target 
            const updatedFormInfo = {
                ...loginFormData,
                [name]: value
            }
            console.log(name, value)
            updateLoginForm(updatedFormInfo)
    }

        const handleSubmit = event => {
            event.preventDefault()
            login(loginFormData)
        }

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' value={loginFormData.name} name="name" placeholder='name' onChange={handleInputChange} />
            <input type='text' value={loginFormData.password} name="password" placeholder='password' onChange={handleInputChange} /> 
            <input type='submit' value="Log In" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginReducer
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)