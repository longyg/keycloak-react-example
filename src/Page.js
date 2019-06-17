import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import App from './App'

export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/app/demo/index" push />}></Route>
                <Route path="/app" component={App}></Route>
            </Switch>
        </Router>
    )
}