import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class index extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <NavLink activeClassName="demo"  className="list-group-item" {...this.props}></NavLink>
            </div>
        )
    }
}
