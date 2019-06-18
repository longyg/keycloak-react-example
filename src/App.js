import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Routes from './routes'
import { Link } from 'react-router-dom'

export default class App extends Component {

  getLoginUser() {
    let user = ""
    if (this.props.keycloak && this.props.keycloak.tokenParsed) {
      user = this.props.keycloak.tokenParsed.preferred_username
    }
    return user
  }

  onLogout() {
    if (this.props.keycloak) {
      this.props.keycloak.logout()
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Keycloak</h2>
          <div className="App-navi">
            <Link to="/app/product/index" className="navi">Product</Link>
            <Link to="/app/admin/index" className="navi">Admin</Link>
          </div>
          <div className="App-user-info">
            Login User: {this.getLoginUser()} &nbsp;
            <button onClick={this.onLogout.bind(this)} className="btn btn-success" >Logout</button>
          </div>
        </div>
        <div className="App-content">
          <Routes></Routes>
        </div>
      </div>
    );
  }
}
