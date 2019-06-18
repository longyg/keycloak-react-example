import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';
import './index.css';
import { keycloak, keycloakState, initKeycloak } from './keycloak'

const render = (Component) => {
  ReactDOM.render(
    <Component keycloak={keycloak} />,
    document.getElementById('root')
  );
}

if (!keycloak.authenticated && !keycloakState.initialized) {
  console.log('App start init keycloak')
  initKeycloak(() => {
    render(Page)
  })
}
