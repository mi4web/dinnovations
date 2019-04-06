import React, {Component} from "react";
import DefaultLayout from "../Layout/DefaultLayout/DefaultLayout";
import ContactPage from "../containers/Contact/Contact";

class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <DefaultLayout>
                <ContactPage />
            </DefaultLayout>
        )
    }
}

export default Contact;
