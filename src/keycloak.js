import Keycloak from 'keycloak-js'
import KeycloakAuthorization from 'keycloak-js/dist/keycloak-authz';

class KeycloakClient {
    constructor() {
        this.keycloakState = {
            initialized: false,
            authenticated: false
        }

        this.keycloak = new Keycloak('/keycloak.json')

        this.keycloakAuthz = {}
    }

    initKeycloak = (callback) => {
        this.keycloak.init({onLoad: "login-required"})
        .success(async authenticated => {
            if (authenticated) {
                this.keycloakState.initialized = true
                this.keycloakState.authenticated = true
    
                // this.keycloakAuthz = new KeycloakAuthorization(this.keycloak, () => {
                //     callback(this.keycloak)
                // })
    
                callback(this.keycloak)
            } 
        }); 
    }

    checkRoles = (roles) => {
        let result = true
        for (let i in roles) {
            if (!this.keycloak.hasRealmRole(roles[i])) {
                result = false
                break
            }
        }
        return result
    }

    checkPermissions = (permissions) => {
        console.log('checking permissions: ', permissions)
        this.then = (onGrant, onDeny) => {
            this.keycloakAuthz.entitlement(this.keycloak.clientId, {
                permissions: permissions
            }).then((rpt) => {
                // console.log('You are granted permissions', rpt)
                onGrant()
            },
            () => {
                // console.log('You are not granted permissions')
                onDeny()
            })
        }
        return this
    }
}

const keycloakClient = new KeycloakClient()
export default keycloakClient