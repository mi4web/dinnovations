import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HomePage.scss';
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";

class HomePage extends Component {
    render() {
        return (
            <div className="homePage">
                <HomeCarousel/>
                <div className="description">
                    D Innovations is a multidisciplinary architecture, interior design, landscaping and urban planning firm founded in 2000.
                </div>
            </div>
        );
    }
}

export default HomePage;
