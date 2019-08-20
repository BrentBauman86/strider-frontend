import React from 'react';
import logo from './logo.svg';
import './App.css';
import { runForm } from './components/runForm'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import  NavBar from './components/NavBar'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component{
  
  componentDidMount(){
     this.props.getCurrentUser()
  }
  
  render() {
    return (
      <NavBar/>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
