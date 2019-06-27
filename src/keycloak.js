import Keycloak from 'keycloak-js'

class KeycloakClient {
    constructor() {
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
                result = false
                break
            }
        }
        return result
    }
}

const keycloakClient = new KeycloakClient()
export default keycloakClient