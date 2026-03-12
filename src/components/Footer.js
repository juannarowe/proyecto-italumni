export class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-[#1a1f26] text-white py-12 px-6 flex-none relative z-20 w-full mt-auto">
                <div class="max-w-7xl mx-auto">
                    <!-- Newsletter -->
                    <div class="flex flex-col items-center mb-16">
                        <h3 class="text-xl font-medium mb-6 text-center">"No et perdis res, subscriu-te!"</h3>
                        <div class="relative w-full max-w-md flex">
                            <div class="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                    </path>
                                </svg>
                            </div>
                            <input type="email" placeholder="El teu email"
                                class="w-full bg-[#242933] border border-gray-600 rounded-l-full py-3 pl-10 pr-4 focus:outline-none focus:border-pink-500">
                            <button
                                class="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-r-full font-medium whitespace-nowrap hover:opacity-90 transition-opacity">
                                Subscriu-te
                            </button>
                        </div>
                    </div>

                    <!-- Links & Logo -->
                    <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                        <a href="/" class="flex-shrink-0">
                            <img src="/src/assets/logo.svg" alt="ITAlumni Logo" class="h-8 w-auto brightness-0 invert">
                        </a>

                        <nav class="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium">
                            <a href="#" class="hover:text-pink-500 transition">Sobre nosaltres</a>
                            <a href="#" class="hover:text-pink-500 transition">Funcionalitats</a>
                            <a href="#" class="hover:text-pink-500 transition">Centre d'ajuda</a>
                            <a href="#" class="hover:text-pink-500 transition">Contacta'ns</a>
                            <a href="#" class="hover:text-pink-500 transition">FAQs</a>
                            <a href="#" class="hover:text-pink-500 transition">Oportunitats laborals</a>
                        </nav>
                    </div>

                    <hr class="border-gray-700 mb-8">

                    <!-- Bottom row: Language & Copyright & Socials -->
                    <div class="flex flex-col md:flex-row justify-between items-center gap-6">

                        <!-- Language -->
                        <div class="relative">
                            <select
                                class="bg-transparent border border-gray-600 rounded-md py-1 px-4 pr-8 appearance-none text-sm cursor-pointer outline-none focus:border-pink-500">
                                <option class="text-black">Català</option>
                                <option class="text-black">Español</option>
                                <option class="text-black">English</option>
                            </select>
                            <div class="absolute inset-y-0 right-2 flex items-center pointer-events-none text-gray-400">⌄
                            </div>
                        </div>

                        <!-- Copyright -->
                        <div class="text-[10px] text-gray-400 text-center leading-loose">
                            © 2024 Brand, Inc. • Privadesa • Termes d'ús<br class="md:hidden"> • Mapa del lloc
                        </div>

                        <!-- Socials -->
                        <div class="flex gap-4">
                            <a href="#" class="text-gray-400 hover:text-white transition text-xl">
                                <i class="fab fa-facebook"></i> <span class="sr-only">Facebook</span>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition text-xl">
                                <i class="fab fa-linkedin"></i>
                                <span class="sr-only">LinkedIn</span>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition text-xl">
                                <i class="fab fa-youtube"></i>
                                <span class="sr-only">YouTube</span>
                            </a>
                        </div>

                    </div>
                </div>
            </footer>
        `;
    }
}
customElements.define('app-footer', AppFooter);
//# sourceMappingURL=Footer.js.map