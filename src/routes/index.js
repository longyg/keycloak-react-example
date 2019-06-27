import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ProductIndex from '../components/product/ProductIndex'
import AdminIndex from '../components/admin/AdminIndex'
import keycloakClient from '../keycloak'
import Denied from '../components/pages/Denied'

export default class MyRouter extends Component {

    authorize = (roles, component) => {
        let result = keycloakClient.checkRoles(roles);
        if (result) {
            return component
        } else {
            return Denied
        }
    };

    render() {
        return (
            <Switch>
                {/* <Route exact path="/app/product/index" component={ProductIndex}></Route> */}
                {/* <Route exact path="/app/admin/index" component={AdminIndex}></Route> */}
                <PrivateRoute exact path="/app/product/index" component={ProductIndex} />
                <PrivateRoute exact path="/app/admin/index" component={AdminIndex} />
            </Switch>
        )
    }
}

const PrivateRoute = ({path: path, component: Component, ...rest}) => {
    return keycloakClient.isAccessable(path) ? (
        <Route 
            {...rest}
            render={props => (<Component {...rest} {...props}></Component>)}></Route>
    ) : (
        <Route 
            {...rest}
            render={props => (<Denied {...rest} {...props}></Denied>)}></Route>
    )
}
