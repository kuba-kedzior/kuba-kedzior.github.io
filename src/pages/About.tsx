import { Component } from "solid-js";
import Trees from '../assets/Trees.jpg';
import Trees2 from '../assets/Trees2.jpg';
import Trees3 from '../assets/Trees3.jpg';
import Roses from '../assets/Roses.jpg';
import Lamp from '../assets/Lamp.jpg';
import Bird from '../assets/Bird4.jpg';
import Flower from '../assets/House_Flowers.jpg';
import L2Schematic from '../assets/L2.png';
const About: Component = () => {
    return (
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 m-8">
            {/* Rocketry Section */}
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-bold py-4">Rocketry</h2>
                <div class="mb-4">
                    <img src={L2Schematic} alt="L2 Schematic" class="w-full h-auto rounded-lg mb-4"/>
                    <p class="text-gray-700">
                        I'm currently studying to get my B.S. in Computer Science, but outside of classes, I dedicate my time to my university's rocketry team, of which I am the current president.
                        Having four years of experience in rocketry, I've picked it up as a personal hobby as well, building and launching rockets in my free time.
                        I'm also currently designing an L2-certification fiberglass rocket, which will be able to fly electronic sensor payloads around a mile high! This project has been a great learning experience in CAD, Simulation, and Manufacturing.
                        This rocket maiden flight will carry a custom flight computer payload which I am currently designing and documenting on this github repo: <a href="https://github.com/kuba-kedzior/Rocketry-GPS-Tracker" class="text-blue-500 underline">Rocketry-GPS-Tracker</a>
                    </p>
                </div>
                <div>
                    <img src={Lamp} alt="Lamp Rocket Photo" class="w-full h-auto rounded-lg"/>
                    <p class="text-gray-700 mb-4">
                        Recently I also scratch built a project for a local "night launch" event: a 6 foot tall rocket, with an LED lightbulb as the nose cone, which can be retrofitted into a lamp after the event! 
                        This was an awesome project, and I had a lot of fun designing and building it. It was also a great way to learn more about aerodynamics and stability, I ended up putting a lot of time into verifying that the rocket would be stable under abnormal wind forces.
                    </p>
                </div>
            </div>

            {/* Photography Section */}
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-bold py-4">Photography</h2>
                <div class="mb-4">
                    <img src={Trees} alt="Photography Sample" class="w-full h-auto rounded-lg"/>
                    <p class="text-gray-700 mb-4">
                        Another hobby of mine is photography! I started taking photos about 2 years ago, using a hand me down DSLR camera.
                        Since then I've been slowly mastering the gear that I have. I mostly enjoy landscape and nature photography, but I also do documentation for rocket team events.
                    </p>
                </div>
                <div>
                    <img src={Trees2} alt="Trees near the Minneapolis campus" class="w-full h-auto rounded-lg"/>
                    <br/>
                    <img src={Trees3} alt="Street photo in autumn" class="w-full h-auto rounded-lg"/>
                    <br/>
                    <img src={Bird} alt="Photo of a Woodpecker" class="w-full h-auto rounded-lg"/>
                </div>
            </div>

            {/* Plants Section */}
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold py-4">Plants!</h2>
                <div class="mb-4">
                    <img src={Roses} alt="A photo of my Rose bush!" class="w-full h-auto rounded-lg"/>
                    <p class="text-gray-700">
                        I'm also passionate about plants! I have a small collection of indoor plants that I take care of, including a monstera, golden pothos, a mini rose bush, and a cuban oregano bush! 
                    </p>
                </div>
                <div>
                    <img src={Flower} alt="Photo of my Kalanchoe!" class="w-full h-auto rounded-lg"/>
                    <p class="text-gray-700">
                        This my Kalanchoe! It recently had its first spring bloom, and I was so excited to see the flowers!
                    </p>
                </div>

            </div>
        </div>
    );
}
export default About;