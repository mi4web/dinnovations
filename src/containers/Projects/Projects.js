import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import './Projects.scss';
import work1 from "../../Img/work/work1.jpg";
import work2 from "../../Img/work/work2.jpg";
import work3 from "../../Img/work/work3.jpg";
import work4 from "../../Img/work/work4.jpg";
import work5 from "../../Img/work/work5.jpg";

class Projects extends Component {
    render() {
        return (
            <div className="projectsPage">
                    <div className="head">
                            <span>PROJECTS</span>
                    </div>
                    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                            <Masonry gutter={5}>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/5371c0c8e4b0cb63d6f519af/1399963853219/01.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/56d6cc3d746fb985f0f71af8/1456917566909/AJA_Pavilion_Thumbnail.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/5b447ce7575d1f575c303164/1531215082295/AJA_316_JH_Thumbnail.com.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/5c2ccf82cd836676a1c36f9e/1546440639294/AJA_St%2BStephens%2BSteps_%2BThumbnail_02.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/50b1c862e4b01c11f0ef8c00/1353828451604/1.01.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/555de133e4b07cbac0d07165/1432215862938/AJA_TBGP_Thumbnail.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/5371c0c8e4b0cb63d6f519af/1399963853219/01.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/56d6cc3d746fb985f0f71af8/1456917566909/AJA_Pavilion_Thumbnail.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/5b447ce7575d1f575c303164/1531215082295/AJA_316_JH_Thumbnail.com.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/5c2ccf82cd836676a1c36f9e/1546440639294/AJA_St%2BStephens%2BSteps_%2BThumbnail_02.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/50b1c862e4b01c11f0ef8c00/1353828451604/1.01.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/555de133e4b07cbac0d07165/1432215862938/AJA_TBGP_Thumbnail.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/5371c0c8e4b0cb63d6f519af/1399963853219/01.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/56d6cc3d746fb985f0f71af8/1456917566909/AJA_Pavilion_Thumbnail.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/5b447ce7575d1f575c303164/1531215082295/AJA_316_JH_Thumbnail.com.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/5c2ccf82cd836676a1c36f9e/1546440639294/AJA_St%2BStephens%2BSteps_%2BThumbnail_02.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/50b1c862e4b01c11f0ef8c00/1353828451604/1.01.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/555de133e4b07cbac0d07165/1432215862938/AJA_TBGP_Thumbnail.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/5371c0c8e4b0cb63d6f519af/1399963853219/01.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/56d6cc3d746fb985f0f71af8/1456917566909/AJA_Pavilion_Thumbnail.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/5b447ce7575d1f575c303164/1531215082295/AJA_316_JH_Thumbnail.com.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/5c2ccf82cd836676a1c36f9e/1546440639294/AJA_St%2BStephens%2BSteps_%2BThumbnail_02.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/50b1c862e4b01c11f0ef8c00/1353828451604/1.01.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/555de133e4b07cbac0d07165/1432215862938/AJA_TBGP_Thumbnail.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/5371c0c8e4b0cb63d6f519af/1399963853219/01.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/56d6cc3d746fb985f0f71af8/1456917566909/AJA_Pavilion_Thumbnail.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/5b447ce7575d1f575c303164/1531215082295/AJA_316_JH_Thumbnail.com.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/5c2ccf82cd836676a1c36f9e/1546440639294/AJA_St%2BStephens%2BSteps_%2BThumbnail_02.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/50b1c862e4b01c11f0ef8c00/1353828451604/1.01.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/555de133e4b07cbac0d07165/1432215862938/AJA_TBGP_Thumbnail.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/5371c0c8e4b0cb63d6f519af/1399963853219/01.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/56d6cc3d746fb985f0f71af8/1456917566909/AJA_Pavilion_Thumbnail.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/5b447ce7575d1f575c303164/1531215082295/AJA_316_JH_Thumbnail.com.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/5c2ccf82cd836676a1c36f9e/1546440639294/AJA_St%2BStephens%2BSteps_%2BThumbnail_02.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/50b1c862e4b01c11f0ef8c00/1353828451604/1.01.jpg?format=500w" alt=""/>
                                    <img src="https://static1.squarespace.com/static/50a3551ee4b0470a27b73ea6/t/555de133e4b07cbac0d07165/1432215862938/AJA_TBGP_Thumbnail.jpg?format=500w" alt=""/>
                            </Masonry>
                    </ResponsiveMasonry>
            </div>
        );
    }
}

export default Projects;
