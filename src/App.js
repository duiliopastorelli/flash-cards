import React, {Component} from 'react';
//TODO change the logo
import './App.css';
import {Route} from 'react-router-dom';
import Welcome from "./components/Welcome";
import Cards from "./components/Cards";
import Registration from "./components/Registration";
import Settings from "./components/Settings";

class App extends Component {
  //TODO add a logout system if the same browser is shared between users

  state = {
    nickName: ''
  };

  //Check if a specific cookie exists already
  cookieExists = (cookieName) => {
    if (document.cookie.split(';').filter(function (item) {
      return item.indexOf(`${cookieName}=`) >= 0
    }).length) {
      return true;
    }
  };

  //Set a specific cookie using a specific value
  setCookie = (cookieName, value) => {
    //Check if the cookie already exist
    if (document.cookie.split(';').filter(function (item) {
      return item.indexOf(`${cookieName}=`) >= 0
    }).length === 0) {
      document.cookie = (`${cookieName}=${value}`);
    }
  };

  handleNickNameUpdate = (nickName) => {
    this.setState({nickName: nickName});
    this.setCookie('userToken', nickName);
  };

  render() {
    return (
      <div className="App">

        <Route exact path="/" render={() => {
          //Check if the userToken is set and displays the cards or the
          // Welcome message
          return this.cookieExists('userToken') ? <Cards/> : <Welcome/>
        }}/>

        <Route exact path="/registration" render={() => {
          return (
            <Registration
              handleNickNameUpdate={this.handleNickNameUpdate}
            />
          )
        }}/>

        <Route exact path="/settings" render={() => {
          return <Settings/>
        }}/>
      </div>
    );
  }
}

export default App;
