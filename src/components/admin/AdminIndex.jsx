import React, { Component } from 'react'
import admin from '../../images/admin.jpg'

export default class Demo2Index extends Component {
    render() {
        return (
            <div className="admin">
                <h2>Administration console</h2>
                <img src={admin} width="50%" alt="admin"/>
            </div>
        )
    }
}