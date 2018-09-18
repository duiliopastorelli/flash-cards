import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Flash Cards</h1>
        <p>Welcome to Flash Cards</p>
        <p>Looks like you are not registered yet...</p>
        <p>For use this app you need to follow a light-speed registration.</p>
        <p>You will then get a special link to access the Flash Cards
          functionalities</p>

        <Link to={'/registration'} >Register me!</Link>
      </div>
    )
  };
}

export default Welcome;