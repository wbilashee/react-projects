import React from "react";
import { useParams } from "react-router-dom";
import projects from "./Home/data";
import NotFound from "./NotFound";

export default function Project() {
    const { project } = useParams();
    const title = decodeURIComponent(project);

    try {
        const element = projects.filter(item => item.title === title);
        const Component = element[0].component;
        return <Component />
    } catch (error) {
        return <NotFound />
    }
}
