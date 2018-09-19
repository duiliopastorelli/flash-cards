import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Settings extends Component {

  state = {
    nickName:this.props.nickName,
    languages: []
  };

  componentDidMount() {
    this.state.nickName && this.getLanguages(this.state.nickName);
  }

  componentDidUpdate(prevProps, newProps){
    prevProps.nickName !== newProps.nickName &&
    this.getLanguages(this.state.nickName);
  }

  /**
   * Get all the languages set by the user from API
   */
  getLanguages = (nick) => {
    console.log(nick);
    const url = `http://localhost:3000/users/languages/${nick}`;
    fetch(url, {
      method: 'get',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({languages: res})
      })
      .catch(error => console.warn(error));
  };

  render() {
    const {nickName} = this.props;

    return (
      <div>
        <h1>Settings</h1>
        <p>Howdy {nickName}, this is your setting page.</p>

        <h2>Your selected languages</h2>
        <ul>
          {this.state.languages.map(lang => {
            return <li key={lang}>{lang}</li>
          })}
        </ul>

        {this.state.languages === [] &&
        <p>It seems that you don't have languages selected. Pick at least 2 of
          them.</p>
        }
        <Link to="/">Go back</Link>
      </div>
    )
  }
}

export default Settings;