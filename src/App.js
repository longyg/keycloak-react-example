import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Routes from './routes'
import { Link } from 'react-router-dom'
import keycloakClient from './keycloak'

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
<<<<<<< HEAD
            {/* <Link to="/app/product/index" className="navi">Product</Link> */}
            {/* <Link to="/app/admin/index" className="navi">Admin</Link> */}
            <PrivateLink to="/app/product/index" className="navi">Product</PrivateLink>
            <PrivateLink to="/app/admin/index" className="navi">Admin</PrivateLink>
=======
            {keycloakClient.checkRoles(['normal_role']) ? <Link to="/app/product/index" className="navi">Product</Link> : null}
            {keycloakClient.checkRoles(['admin_role']) ? <Link to="/app/admin/index" className="navi">Admin</Link> : null}
>>>>>>> 9d45eb5fc4217385f97401f0180b77648db2651b
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

const PrivateLink = ({to: path, children, ...rest}) => {
  return keycloakClient.isAccessable(path) ? (
          <Link to={path} {...rest}>{children}</Link>
        ) : null
}
