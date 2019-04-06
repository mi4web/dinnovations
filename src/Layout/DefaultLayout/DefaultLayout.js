import React, { Component } from "react";
import PropTypes from "prop-types";
import "./DefaultLayout.scss";
import NavBar from "../../components/Nav/NavBar";
import { NAV } from "../../constants/appConstants";


class DefaultLayout extends Component {


    render() {
        return (
            <div className="mainContainer">
                <div className="flex-row j-sb a-c">
                    <NavBar items={NAV}/>
                    <div className="brandName">D Innovations</div>
                </div>
                {this.props.children}
                <footer className="flex-row j-sb">
                    <div>
                        Copyright {new Date().getFullYear()} D Innovations /  All Photographs © D Innovations
                    </div>
                    <div className="socialIcons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                </footer>
            </div>
        );
    }
}

DefaultLayout.propTypes = {
    header: PropTypes.bool,
    footer: PropTypes.bool
};
export default DefaultLayout;
