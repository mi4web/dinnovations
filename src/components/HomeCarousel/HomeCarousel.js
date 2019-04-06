import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import work1 from "../../Img/work/work1.jpg";
import work2 from "../../Img/work/work2.jpg";
import work3 from "../../Img/work/work3.jpg";
import work4 from "../../Img/work/work4.jpg";
import work5 from "../../Img/work/work5.jpg";

import PropTypes from 'prop-types';

class HomeCarousel extends Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay emulateTouch showThumbs={false} showIndicators={false} showStatus={false}>
                <div>
                    <img src={work1} />
                </div>
                <div>
                    <img src={work2} />
                </div>
                <div>
                    <img src={work3} />
                </div>
                <div>
                    <img src={work4} />
                </div>
                <div>
                    <img src={work5} />
                </div>
            </Carousel>
        );
    }
}

export default HomeCarousel;
