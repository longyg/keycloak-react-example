import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';
import './index.css';
import { keycloakState, initKeycloak } from './keycloak'

const render = (Component, keycloak) => {
  ReactDOM.render(
    <Component keycloak={keycloak} />,
    document.getElementById('root')
  );
}

if (!keycloakState.initialized) {
  initKeycloak((keycloak) => {
    render(Page, keycloak)
  })
}
