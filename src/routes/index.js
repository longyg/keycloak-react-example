import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import DemoIndex from '../components/demo/DemoIndex'
import Demo2Index from '../components/demo2/Demo2Index'

export default class MyRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/app/demo/index" component={DemoIndex}></Route>
                <Route exact path="/app/demo2/index" component={Demo2Index}></Route>
            </Switch>
        )
    }
}
