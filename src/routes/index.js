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
<<<<<<< HEAD
                {/* <Route exact path="/app/product/index" component={ProductIndex}></Route> */}
                {/* <Route exact path="/app/admin/index" component={AdminIndex}></Route> */}
                <PrivateRoute exact path="/app/product/index" component={ProductIndex} />
                <PrivateRoute exact path="/app/admin/index" component={AdminIndex} />
=======
                <Route exact path="/app/product/index" component={this.authorize(['normal_role'], ProductIndex)}></Route>
                <Route exact path="/app/admin/index" component={this.authorize(['admin_role'], AdminIndex)}></Route>
            
                {/* <PrivateRoute exact path='/app/product/index' component={ProductIndex} permissions={[{id: 'Product Resource'}]}></PrivateRoute> */}
                {/* <PrivateRoute exact path='/app/admin/index' component={AdminIndex} permissions={[{id: 'Admin Resource'}]}></PrivateRoute> */}
>>>>>>> 9d45eb5fc4217385f97401f0180b77648db2651b
            </Switch>
        )
    }
}

<<<<<<< HEAD
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
=======
const PrivateRoute = ({component: Component, permissions: permissions, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props => 
            keycloakClient.checkPermissions(permissions).then(
                () => <Component {...rest} {...props} />,
                () => <Redirect to='/denied' />
            )
        }
      />
    );
>>>>>>> 9d45eb5fc4217385f97401f0180b77648db2651b
}
