import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const {nickName} = this.props;

    return (
      <div>
        <h1>Welcome {nickName}</h1>
        <p>Dashboard</p>
        <p>Note: stats have not been implemented yet.</p>

        <div>
          <Link to={'/cards'} >Go to the Cards</Link>
        </div>
        <div>
          <Link to={'/settings'} >Settings</Link>
        </div>
      </div>
    )
  };
}

export default Dashboard;