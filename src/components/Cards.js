import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Cards extends Component {
  render() {
    const {nickName} = this.props;

    return (
      <div>
        <h1>Welcome {nickName}</h1>
        <p>Cards</p>

        <Link to={'/settings'} >Settings</Link>
      </div>
    )
  };
}

export default Cards;