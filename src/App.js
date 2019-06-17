import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Routes from './routes'
import { Link } from 'react-router-dom'
import { keycloak, keycloakState, initKeycloak } from './keycloak'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keycloak: null,
      keycloakState: null
    }
  }
  componentDidMount() {
    console.log('App mounted')
    if (!keycloakState.initialized) {
      console.log('App start init keycloak')
      initKeycloak(() => {
        console.log('App init keycloak done')
        this.setState({
          keycloak: keycloak,
          keycloakState: keycloakState
        })
        console.log('App set state done')
      })
    }
    console.log('App mounted done')
  }

  render() {
    console.log('Render App: ')
    console.log(this.state.keycloak)
    console.log(this.state.keycloakState)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Keycloak</h2>
          <div className="App-navi">
            <Link to="/app/demo/index" className="navi">Demo</Link>
            <Link to="/app/demo2/index" className="navi">Demo2</Link>
          </div>
          <div className="App-user-info">
            Login User: {this.state.keycloak ? this.state.keycloak.tokenParsed.preferred_username : null} &nbsp;
            <button onClick={this.state.keycloak? this.state.keycloak.logout: null} className="btn btn-success" >Logout</button>
          </div>
        </div>
        <div className="App-content">
          <Routes></Routes>
        </div>
      </div>
    );
  }
}

export default App;
