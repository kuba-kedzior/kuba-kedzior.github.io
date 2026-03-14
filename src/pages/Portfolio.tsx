import { Component } from "solid-js";
import Project from "../components/project";
import EarlyWings from "../assets/EarlyWingsGraphs.png";     
import WingsUI from "../assets/WingsUI.png";     
import RealData from "../assets/RealData.png";     
import IRECPresentation from "../assets/IRECPresentation.jpg";
import ufc from "../assets/ufc.png";
import ufc2 from "../assets/ufc2.jpg";
import ufc3 from "../assets/ufc3.jfif";
import static1 from "../assets/static.png";
import static2 from "../assets/static2.png";
import static3 from "../assets/static3.png";
const Portfolio: Component = () => {
    return (
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 m-8">
            <Project
                title="Telemetry Agnostic Ground Station"
                skills={["Rust", "Realtime Telemetry", "TypeScript"]}
                subheadings={["Early Beginnings", "Agnostic Telemetry", "Modular Interface"]}
                descriptions={[
                    `Upon Inheriting the project in 2023, the team currently did not have a ground station for our modular flight computer. As such my immediate focus became hitting minimum viable product so that the avionics team could validate and read our telemetry data during testing and launches. 
                    Over the course of my first semester I developed a roadmap for making a minimum viable product. This included implementing unit tests to verify the successful parsing of telemetry, and implementing our own bare bones transmitter, for conducting HIL testing with the RF link.
                    By focusing strictly on bare-bones features, we were able to outpace the larger firmware team, and hit MVP multiple months ahead of schedule!`,
                    `As our project outpaced firmware, we began to set our sights on making the ground station more flexible to different mission criteria. Many of our team flights included both commercial and custom telemetry systems, but we didn't have an easy way to synthesize information from multiple sources on the ground.
                    To add support for multiple telemetry sources, I implemented the "strategy" design pattern, to allow for different parsers and file inputs to be used interchangeably within the backend. 
                    The ability to support multiple commercial telemetry sources interchangeably, was a feature unique to our ground station among collegiate teams, and I ended up presenting on the design philosophy at the 2025 IREC competition!`,
                    `Once our backend became telemetry agnostic the next step was a UI upgrade. Different Missions required different Information to be on the screen, but our UI was forced into a static grid.
                    To solve this I led development of a user-defined UI system, emulating customizability of other dashboards such as grafana. 
                    Once Completed, Users were able to Flexibly decide which way they wanted to see the data available to them, leading to more positive feedback and increased field use within the team.`
                ]}
                thumbnails={[
                    {src: IRECPresentation, alt: "A photo of me presenting at IREC 2025"},
                ]}
                images={[
                    {src: EarlyWings, alt: "Early Graphs from the Ground Station"},
                    {src: RealData, alt: "A photo of the UI with Real telemetry from a COTS altimeter"},
                    {src: WingsUI, alt: "UI for the Ground Station"},
                ]}
                links={[
                    { label: "GitHub", href: "https://github.com/UMN-Rocket-Team/WINGS" },
                ]}
            />
            <Project
                title="Universal Flight Computer"
                skills={["C", "STM32", "SPI", "I2C", "Logic Analyzers", "Rust"]}
                subheadings={["Modular Design","Testing and Verification"]}
                descriptions={[
                    `In the field of amateur rocketry, experimental flight computers are often designed on one singular PCB, leading to a full hardware redesign when mission criteria are updated. 
                    The UMN rocket team developed the UFC as a solution this problem, having multiple cards communicate over a shared back plane pcb in order to increase design modularity. 
                    This has allowed the team to rapidly prototype and iterate upon the flight computer, successfully re-using old hardware`,
                    `In 2024, I was tasked with completing Verification and Validation for flight hardware and code, given about 2 months to finish the process before launch. 
                    In order to validate the FLight computer, I developed a rigorous testing campaign, Using Saleae logic analyzers and JTAG debuggers to complete integration and unit testing with flight hardware. 
                    Through the course of this test campaign two critical issues were successfully discovered before flight, involving both Radio and Flash Memory`,
                ]}
                thumbnails={[
                    {src: ufc, alt: "UFC photo"},
                ]}
                images={[
                    {src: ufc2, alt: "UFC photo"},
                    {src: ufc3, alt: "UFC photo"},
                ]}
            />
                        <Project
                title="Hot Fire Data Acquisition and Analysis"
                skills={["Python", "Numpy", "RealTime Data Logging", "Matplotlib"]}
                subheadings={["Data Analysis", "Robust Data Handling"]}
                descriptions={[
                    `The UMN rocket team frequently static fires motors, and over the course of the last 3 years I have been responsible for data acquisition and analysis during these tests.
                    During the early stages of my involvement, It became apparent that propulsion engineers wanted a quick turn around time on data analysis, but the team was using a data acquisition system only logged raw data and required manual conversion and analysis after the fact.
                    At my first static fire, I developed a script to apply calibration curves, and calculate impulse accounting for the motors weight. 
                    The newly made script allowed for immediate onsite data analysis after a test. This script was later upgraded to create formatted files that could be used for flight simulation as well!`,
                    `Following my initial improvements I added functionality to transmit data away from the test fire stand to an offsite black box. 
                    I chose to handle Data Aquisition, transmission and logging on seperate simultanious threads, impelmenting the system so that even if one of these operations failed, the other would not be interrupted`,
                ]}
                thumbnails={[
                    {src: static1, alt: "photo of static fire with data"},
                ]}
                images={[
                    {src: static3, alt: "photo of static fire"},
                    {src: static2, alt: "photo of data collection box"},
                ]}
            />
        </div>
    );
}
export default Portfolio;