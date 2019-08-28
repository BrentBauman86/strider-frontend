import React from 'react';
import logo from './logo.svg';
import './App.css';
import { runForm } from './components/runForm'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import  NavBar from './components/NavBar.js'
import Login from './components/Login'
import Logout from './components/Logout'


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

// class App extends React.Component{
  
//   componentDidMount(){
//      this.props.getCurrentUser()
//   }
  
//   render() {
//     return (
//         this.props.currentUser ? "welcome, {currentUser.name}" : "",
//         this.props.currentUser ? <Logout/> : <Login/>
//     );

//       }
//     }
//     const mapStateToProps = ({currentUser}) => {
//       return {
//         currentUser  
//       }
// }

// export default connect(mapStateToProps, { getCurrentUser })(App);

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
