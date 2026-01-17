import { Component } from "solid-js";
import Project from "../components/project";

const Portfolio: Component = () => {
    return (
        <div id="portfolio" class="p-8 m-8">
            <Project title = "Telemetry Agnostic Ground Station"/>
            <Project title = "Universal Flight Computer"/>
            <Project title = "C++ Ray Tracer"/>
        </div>
    );
}
export default Portfolio;