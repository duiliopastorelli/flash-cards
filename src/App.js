import React, { Component } from 'react';
//TODO change the logo
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Welcome from "./components/Welcome";
import Cards from "./components/Cards";
import Registration from "./components/Registration";
import Settings from "./components/Settings";

class App extends Component {

  state = {
    userIsRegistered:false
  };

  //Check if a specific cookie exists already
  cookieExists = (cookieName) =>{
    if (document.cookie.split(';').filter(function(item) {
      return item.indexOf(`${cookieName}=`) >= 0
    }).length) {
      return true;
    }
  };

  //Set a specific cookie using a specific value
  setCookie = (cookieName, value) => {
    //Check if the cookie already exist
    if (document.cookie.split(';').filter(function(item) {
      return item.indexOf(`${cookieName}=`) >= 0
    }).length === 0) {
      console.log(`Cookie ${cookieName} didn't exist, gonna create it`);
      document.cookie = (`${cookieName}=${value}`);
      console.log(document.cookie);
    }
  };

  render() {
    return (
      <div className="App">

        {/* Route for the main view */}
        {/* Check if the cookie user_token is set */}
        {/* If is not set displays the welcome message */}
        {!this.cookieExists('userToken') &&
        <Welcome/>
        }

        {/* If it's set display the cards */}
        {this.cookieExists('userToken') &&
        <Cards/>
        }

        {/* Route for the user registration */}
        <Registration/>

        {/* Route for the user settings */}
        <Settings/>
      </div>
    );
  }
}

export default App;
