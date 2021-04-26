import React, { Component } from 'react'

export class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-nd navbar-dark bg-dark" >
                        <div><a href="/"  className="navbar-brand">Railway System</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
