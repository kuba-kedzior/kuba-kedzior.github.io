import { Component } from "solid-js";
import Trees from '../assets/Trees.jpg';
import Lamp from '../assets/Lamp.jpg';
import L2Schematic from '../assets/L2.png';
const About: Component = () => {
    return (
        <div class="p-8 m-8">
            <h1 class = "text-2xl font-bold py-4">About Me</h1>
            <div class="flex flex-wrap items-center mb-4">
                <p class="text-gray-700 max-w-6xl">
                    Hello! I'm Kuba Kedzior, an embedded systems engineer soon to graduate from the University of Minnesota. I've made this page to talk a bit about who i am and what my hobbies are!
                </p>
            </div>
            <h2 class = "text-xl font-bold py-4">Rocketry</h2>
            <div class="flex flex-wrap items-center mb-4 border-2 border-gray-400 py-4">
                <p class="text-gray-700 max-w-2xl m-3">
                    I'm currently studying to get my B.S. in Computer Science, but outside of classes, I dedicate my time to my university's rocketry team, of which I am the current president.
                    Having four years of experience in rocketry, I've picked it up as a personal hobby as well, building and launching rockets in my free time.
                    Recently I scratch built a project for a local "night launch" event: a 6 foot tall rocket, with an LED lightbulb as the nose cones, which can be retrofitted into a lamp after the event!
                </p>
                <img src={Lamp} alt="Lamp Rocket Photo" class="max-w-full" style="max-height:75vh"/>
            </div>
            <div class="flex flex-wrap items-center mb-4 border-2 border-gray-400 pt-4">
                    <img src={L2Schematic} alt="L2 Schematic" class="mt-4 max-w-full"/>
                    <p class="text-gray-700 max-w-xl mt-4 border-2 border-gray-400 p-2 m-3">
                        Im also currently designing an L2-certification fiberglass rocket, which will be able to fly electronic sensor payloads over a mile high! This project has been a great learning experience in CAD, Simulation, and Manufacturing. Once the vehicle is complete, I plan to build a custom flight computer network that will live within the rocket
                    </p>
                </div>
            <h2 class = "text-xl font-bold py-4">Photography</h2>
            <div class="mb-4">
                <p class="text-gray-700 max-w-4xl">
                    Another hobby of mine is photography! I started taking photos about 2 years ago, using a hand me down DSLR camera.
                    Since then I've been slowly mastering the gear that I have. I mostly enjoy landscape and nature photography, but I also do documentation for rocket team events.
                </p>
                <img src={Trees} alt="Photography Sample" class="max-w-3xl mt-4"/>
            </div>
        </div>
    );
}
export default About;