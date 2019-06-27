import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';
import './index.css';
<<<<<<< HEAD
import keycloakClient from './keycloak'
=======
// import { keycloakState, initKeycloak } from './keycloak'
import keyCloakClient from './keycloak'
>>>>>>> 9d45eb5fc4217385f97401f0180b77648db2651b

const render = (Component, keycloak) => {
  ReactDOM.render(
    <Component keycloak={keycloak} />,
    document.getElementById('root')
  );
}

<<<<<<< HEAD
if (!keycloakClient.initialized) {
  keycloakClient.init((keycloak) => {
=======
if (!keyCloakClient.keycloakState.initialized) {
  keyCloakClient.initKeycloak((keycloak) => {
>>>>>>> 9d45eb5fc4217385f97401f0180b77648db2651b
    render(Page, keycloak)
  })
}

// if (!keycloakState.initialized) {
//   initKeycloak((keycloak) => {
//     render(Page, keycloak)
//   })
// }
