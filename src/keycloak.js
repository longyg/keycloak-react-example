import Keycloak from 'keycloak-js'

export const keycloakState = {
    initialized: false,
    authenticated: false
}

export const keycloak = Keycloak('/keycloak.json')

export const initKeycloak = (callback) => {
    console.log('starting to init keycloak')
    keycloak.init({onLoad: "login-required"})
    .success(authenticated => {
        console.log('keycloak initialized: ' + authenticated)
        if (authenticated) {
            console.log('keycloak initialized successfully')
            keycloakState.initialized = true
            keycloakState.authenticated = true
        }
        console.log('after init')
        console.log(keycloakState)
        callback()
    });
}