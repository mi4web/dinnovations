import React, {Component} from "react";
import DefaultLayout from "../Layout/DefaultLayout/DefaultLayout";
import HomePage from "../containers/HomePage/HomePage";

class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <DefaultLayout>
                <HomePage />
            </DefaultLayout>
        )
    }
}

export default Home;
