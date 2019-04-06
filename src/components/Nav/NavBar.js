import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.scss';
import { getPathByName } from "../../routes/routerManager";

class NavBar extends Component {
    render() {
        const { items, location: { path } } = this.props;
        return (
            <nav className="navbar">
                {items.map((item, index) => {

                    return <NavLink to={getPathByName(item.route)} activeClassName="active" key={index} exact>
                        {item.text}
                    </NavLink>
                })}
            </nav>
        );
    }
}

export default withRouter(NavBar);
