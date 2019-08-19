import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import { runForm } from './components/runForm'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'

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
      <div>
      {/* <Login /> */}
      <div className="col-md-6">
      <runForm />
      </div>
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
