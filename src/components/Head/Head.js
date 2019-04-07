import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Head.scss'

class Head extends Component {
    render() {
        return (
            <div className="head">
                <span>{this.props.text}</span>
            </div>
        );
    }
}

export default Head;
