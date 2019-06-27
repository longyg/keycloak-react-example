import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';
import './index.css';
import keycloakClient from './keycloak'

const render = (Component, keycloak) => {
  ReactDOM.render(
    <Component keycloak={keycloak} />,
    document.getElementById('root')
  );
}

if (!keycloakClient.initialized) {
  keycloakClient.init((keycloak) => {
    render(Page, keycloak)
  })
}