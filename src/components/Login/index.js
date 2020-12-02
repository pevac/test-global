import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';


export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID


class GoogleComponent extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken
      }));
    }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }

  render() {
    const { children } = this.props
    return (
    <div>
      { this.state.isLogined ?
        children: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}><GoogleLogin
          clientId={ CLIENT_ID }
          buttonText='Login'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />
        </div>
      }
    </div>
    )
  }
}

export default GoogleComponent;