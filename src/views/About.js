import React, {Component} from "react";
import DefaultLayout from "../Layout/DefaultLayout/DefaultLayout";
import AboutPage from "../containers/About/About";

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <DefaultLayout>
                <AboutPage />
            </DefaultLayout>
        )
    }
}

export default About;
