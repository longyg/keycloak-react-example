import Keycloak from 'keycloak-js'
import KeycloakAuthorization from 'keycloak-js/dist/keycloak-authz';

class KeycloakClient {
    constructor() {
<<<<<<< HEAD
        this.initialized = false
        
        this.keycloak = new Keycloak('/keycloak.json')

        this.accessConfig = {}

        this.loadAccessConfig('/access_config.json')
    }

    init = (callback) => {
        this.keycloak.init({onLoad: "login-required"})
        .success(authenticated => {
            if (authenticated) {
                this.initialized = true
    
                callback(this.keycloak)
            }
        });
    }

    loadAccessConfig = (configUrl) => {
        var req = new XMLHttpRequest();
        req.open('GET', configUrl, false);
        req.setRequestHeader('Accept', 'application/json');
        req.send();

        if (req.readyState === 4) {
            if (req.status === 200) {
                var config = JSON.parse(req.responseText);
                this.accessConfig = config
            }
        }
    }

    isAccessable = (path) => {
        if (!this.accessConfig) {
            return false
        }
        let requiredRoles = this.accessConfig[path]
        if (!requiredRoles) {
            return true
        }
        let result = true
        for (var i in requiredRoles) {
            if (!this.keycloak.hasRealmRole(requiredRoles[i])) {
=======
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
>>>>>>> 9d45eb5fc4217385f97401f0180b77648db2651b
                result = false
                break
            }
        }
        return result
    }
<<<<<<< HEAD
=======

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
>>>>>>> 9d45eb5fc4217385f97401f0180b77648db2651b
}

const keycloakClient = new KeycloakClient()
export default keycloakClient