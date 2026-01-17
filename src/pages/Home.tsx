import { Component } from "solid-js";
import { createSignal, onMount } from "solid-js";
import Portrait from '../assets/Portrait.jpg';

export default function Home() {

  return (
    <div class="flex flex-wrap content-stretch">
        <div class="flex-[8_0_20rem] p-6 flex flex-col items-center justify-center">
            <div>
                <div>
                    <h1 class="font-bold bold text-3xl align-bottom text-left">
                        Kuba Kedzior
                    </h1>
                    <p class="text-sm font-semibold text-blue-600 uppercase tracking-wide mt-1">
                        Expected Grad: May 2025 • Open to Relocation • US Citizen
                    </p>
                    <br/>
                    <h3 class="font-bold text-xl text-left max-w-lg mt-3 text-gray-800">
                        Embedded Systems & Software Engineer.
                    </h3>
                    <p class="align-bottom text-left max-w-96 text-gray-600 ">
                        Building high-reliability systems as President of the <a href="https://rkt.aem.umn.edu/" target="_blank" rel="noopener noreferrer"  class="font-bold text-gray-600 hover:text-blue-600 hover:underline transition-colors">UMN Rocket Team</a>.
                        Specializing in telemetry serialization, fault-tolerant architecture, and mission-critical software.
                    </p>
                </div>
                <br/>
                <div>
                    <h3 class="font-bold bold text-xl align-bottom text-left text-gray-800 mt-2">
                        Focus:
                    </h3>
                    <ul class="list-disc list-inside text-gray-600 space-y-0.5">
                        <li>System Architecture</li>
                        <li>Software Verification & Validation</li>
                        <li>Fault Tolerance</li>
                        <li>Data Integrity (CRC)</li>
                    </ul>
                </div>
                <br/>
                <div>
                        <h3 class="font-bold text-lg text-gray-800 mt-2">
                            Tech Stack
                        </h3>
                        <ul class="list-disc list-inside text-gray-600 space-y-0.5">
                            <li><strong>Lang:</strong> C++, Rust, Python</li>
                            <li><strong>Data:</strong> Custom Binary Packing, JSON</li> 
                            <li><strong>Comms:</strong> UART, Serial Telemetry</li>
                            <li><strong>Targets:</strong> Linux, STM32 (HAL), Arduino</li>
                        </ul>

                </div>
            </div>
        </div>
        <div class="flex-[5_0_20rem] p-6 flex flex-col align-middle items-center justify-center">
            <img src={Portrait} alt="Portrait Photo" class="object-cover rounded-full transition-transform"></img>
        </div>
    </div>
  );
}