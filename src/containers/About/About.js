import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './About.scss';

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="head">
                    <span>STUDIO PROFILE</span>
                </div>
                <div className='profile flex-row a-c'>
                    <p className="profileDesc">
                        D Innovations is a multidisciplinary architecture, interior design, landscaping and urban planning firm founded in 1967.

                        Mr. M J Naseem & Mr. Kapoor are the Joint Principal Architects of D Innovations.

                        The firm works at multiple scales and with various organizations right from private clients to corporates & NGOs. This allows us to experiment and diversify our work: architectural & interior projects such as luxury villas, high end residences and unique offices, as well as hospitality & institutional projects, several charitable works including earthquake and cyclone proof buildings in Karaikkal (Tamil Nadu), Vijaywada & Hyderabad (Andhra Pradesh), Latur (Maharashtra) and Rajkot (Gujarat).

                        D Innovations design approach is to re-connect architecture with nature, make optimum use of space, natural materials, lighting & landscape to reinvent and transform living environments and urban spaces.

                        The firm strives to create design that inspires, approaching each project, regardless of size & scale, with an understanding that architecture has a unique power to influence lifestyle and society.

                        Our forte is attention to details and customisation. Honesty to design, client satisfaction, and sustainability are the driving forces, along with the ability to constantly explore & evolve.

                        We are dedicated to unique design approaches adapted to each project, and achieving a balance between functionality & aesthetics, context, climate, material, cost & time-frame.
                    </p>
                    <div className="imageContainer">
                        <img src="https://www.imexgulf.com/wp-content/uploads/2018/02/businesspartners.jpg" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
