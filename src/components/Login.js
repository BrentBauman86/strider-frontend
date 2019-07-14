import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'

const Login = (props) => {
    return (
        <form onSubmit={ undefined }>
            <input placeholder="name" value={props.name} name='name' type="text" onChange={undefined}/>
            <input placeholder="password" value={props.password} name='password' type="text" onChange={undefined}/>
            <input type='submit' value="log In" />
        </form>
    )
}

//this gives me an argument coming to this component

const mapStateToProps = state => {
    return {
        name: state.loginForm.name,
        password: state.loginForm.password
    }
}

export default connect(mapStateToProps, { updateLoginForm })(Login) 