import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Navigation extends React.Component{

    render() {

        return (
            <div>
                <nav className="navbar navbar-expand-lg nvabar-dark bgsuccess fixed-top">
                    <div className="container">
                        <button type="button" className="navbar-brand order-1 btn btn-success" onClick={() => {this.props.showModalWindow();}}>Sign in</button>
                        <div className="navbar-nav">
                            <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-item nav-link" to="/promos">Promotions</NavLink>
                            <NavLink className="nav-item nav-link" to="/promos">About</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

