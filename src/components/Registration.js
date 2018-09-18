import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/registration.css';

class Registration extends Component {

  state = {
    nick: '',
    toHome: false
  };

  /**
   * Handle the submit button event and the fetch request to the API
   * @param event
   */
  handleSubmit = (event) => {
    //TODO make server path dynamic
    const url = `http://localhost:3000/users/register/`;
    const body = {
      "nick": this.state.nick
    };

    /**
     * Persist on the DB the data
     */
    fetch(url, {
      method: 'post',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(this.props.handleNickNameUpdate(this.state.nick))
      .then(this.setState({toHome:true}))
      .catch(error => console.warn(error));

    event.preventDefault();
  };

  /**
   * Handle the changes on the input fields binding them to the state
   * @param event
   */
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  render() {
    return (
      <div>
        <h2>Registration</h2>
        <p>Please provide a nickname</p>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="nickName">Nickname
            <input
              name="nick"
              type="text"
              placeholder="John Smith"
              value={this.state.nick}
              onChange={this.handleChange}
              autoFocus
              required
            />
          </label>
          <input type="submit"
                 value="Submit"
                 disabled={this.state.nick === '' &&
                 'disabled'
                 }
          />
        </form>

        <Link to={'/'}>Go back</Link>

        {this.state.toHome && <Redirect to='/' />}
      </div>
    )
  }
}

Registration.propTypes = {
  handleNickNameUpdate: PropTypes.func.isRequired //For add a new user
};

export default Registration;