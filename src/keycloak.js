import Keycloak from 'keycloak-js'

export const keycloakState = {
    initialized: false,
    authenticated: false
}

export const keycloak = Keycloak('/keycloak.json')

export const initKeycloak = (callback) => {
    keycloak.init({onLoad: "login-required"})
    .success(authenticated => {
        if (authenticated) {
            keycloakState.initialized = true
            keycloakState.authenticated = true
        } else {
            keycloak.login()
        }
        callback(keycloak)
    });
}