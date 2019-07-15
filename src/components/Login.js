import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'

const Login = ({ loginFormData, updateLoginForm, login }) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value 
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData)
    }

    return (
        <form onSubmit={ login }>
            <input placeholder="name" value={loginFormData.name} name='name' type="text" onChange={handleInputChange}/>
            <input placeholder="password" value={loginFormData.password} name='password' type="text" onChange={handleInputChange}/>
            <input type='submit' value="log In" />
        </form>
    )
}

//this gives me an argument coming to this component

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm 
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login) 