import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import App from './App'
import NotFound from './components/pages/NotFound'
import Denied from './components/pages/Denied'

export default class Page extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/app/product/index" push />}></Route>
                    {/* <Route path="/app" component={App}></Route> */}
                    <PropsRoute path="/app" {...this.props} component={App}></PropsRoute>

                    <Route path="/404" component={NotFound}></Route>
                    <Route path="/denied" component={Denied}></Route>
                </Switch>
            </Router>
        )
    }
    
}

const PropsRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={props => (<Component {...rest} {...props}></Component>)}></Route>
    )
}