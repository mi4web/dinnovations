import React, {Component} from "react";
import DefaultLayout from "../Layout/DefaultLayout/DefaultLayout";
import ProjectsPage from "../containers/Projects/Projects";

class Projects extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <DefaultLayout>
                <ProjectsPage />
            </DefaultLayout>
        )
    }
}

export default Projects;
