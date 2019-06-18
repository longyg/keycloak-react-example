import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Routes from './routes'
import { Link } from 'react-router-dom'
// import { keycloak, keycloakState, initKeycloak } from './keycloak'

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     keycloak: null,
  //     keycloakState: null,
  //     location: props.location.pathname
  //   }
  // }
  // componentDidMount() {
  //   console.log('App mounted')
  //   if (!keycloak.authenticated && !keycloakState.initialized) {
  //     console.log('App start init keycloak')
  //     initKeycloak(() => {
  //       console.log('App init keycloak done')
  //       this.setState({
  //         keycloak: keycloak,
  //         keycloakState: keycloakState,
  //         location: location.pathname
  //       })
  //       console.log('App set state done')
  //     })
  //   }
  //   console.log('App mounted done')
  // }

  // componentDidUpdate(prevProps) {
  //   console.log('==========> App did update')
  //   console.log(prevProps.location.pathname)
  //   console.log(location.pathname)
  //   if (prevProps.location.pathname !== this.props.location.pathname) {
  //     console.log('location changed')
  //     console.log(this.props.location.pathname)
  //   }
  // }

  onLogout() {
    if (this.props.keycloak) {
      this.props.keycloak.logout()
    }
  }

  render() {
    console.log('===> render App')
    console.log(this.state)
    console.log(this.props)
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
            Login User: {this.props.keycloak ? this.props.keycloak.tokenParsed.preferred_username : null} &nbsp;
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

export default App;
