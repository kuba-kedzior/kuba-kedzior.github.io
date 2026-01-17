export default function Footer() {
    return(
        <footer class="mt-20 py-4 border-t-2 border-gray-400">
            <div class="flex flex-col md:flex-row justify-between items-center px-4">
                <div class="flex flex-wrap justify-center md:justify-start gap-4">
                        <a href="mailto:kuba.j.kedzior@gmail.com" class="hover:text-blue-600 transition-colors">
                            kuba.j.kedzior@gmail.com
                        </a>
                        <div class="bg-black w-0 p-0 g-0 border-r-2 border-gray-200">
                        </div>
                        <a href="https://www.linkedin.com/in/kubakedzior/" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-blue-700 transition-colors">
                            LinkedIn
                        </a>
                        <div class="bg-black w-0 p-0 g-0 border-r-2 border-gray-200">
                        </div>
                        <a href="https://github.com/kuba-kedzior" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-blue-700 transition-colors">
                            GitHub
                        </a>
                        <div class="bg-black w-0 p-0 g-0 border-r-2 border-gray-200">
                        </div>
                        <a href="/Kuba_Kedzior_Resume.pdf" class="text-gray-500 hover:text-blue-700 transition-colors">
                             Resume
                        </a>
                </div>
            </div>
            
            <div class="text-center mt-8 text-xs text-gray-400">
                &copy; 2025 Kuba Kedzior. Built with Rust (just kidding, it's HTML).
            </div>
        </footer>
    );
}