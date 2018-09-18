import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Cards extends Component {
  render() {
    return (
      <div>
        <p>Cards</p>

        <Link to={'/settings'} >Settings</Link>
      </div>
    )
  };
}

export default Cards;