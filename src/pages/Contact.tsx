import { Component } from "solid-js";

const Contact: Component = () => {
    return (
        <div class="p-8 m-8">
            <h1 class = "text-2xl font-bold py-4">Contact</h1>
            <ul>
                <li class="p-1">Email: 
                    <a href="mailto: kuba.j.kedzior@gamil.com" class="text-blue-500 hover:underline">kuba.j.kedzior@gamil.com</a>
                </li>
                <li class="p-1">LinkedIn: 
                    <a href="https://www.linkedin.com/in/kubakedzior/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
                        www.linkedin.com/in/kubakedzior
                    </a>
                </li>
                <li class="p-1">Public GitHub: 
                    <a href="https://github.com/kuba-kedzior" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
                        github.com/kuba-kedzior  
                    </a>
                </li>
                
            </ul>
            <h1 class = "text-2xl font-bold py-4">Info</h1>
            <ul>
                <li class="p-1">US Citizen</li>
                <li class="p-1">Based in Minneapolis MN, USA. Open to relocation.</li>
                <li class="p-1">Available for full-time roles, starting June 2026!</li>
                <li class="p-1">
                    <a href="/Kuba_Kedzior_Resume.pdf" class="text-blue-500 hover:underline">
                        Download my resume!
                    </a>
                </li>
                
            </ul>

        </div>
    );
}
export default Contact;