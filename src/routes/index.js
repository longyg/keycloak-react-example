import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductIndex from '../components/product/ProductIndex'
import AdminIndex from '../components/admin/AdminIndex'

export default class MyRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/app/product/index" component={ProductIndex}></Route>
                <Route exact path="/app/admin/index" component={AdminIndex}></Route>
            </Switch>
        )
    }
}
