import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import App from './App'

export default class Page extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/app/demo/index" push />}></Route>
                    {/* <Route path="/app" component={App}></Route> */}
                    <PropsRoute path="/app" {...this.props} component={App}></PropsRoute>
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