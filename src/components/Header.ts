import logoUrl from '../assets/logo.svg';

export class AppHeader extends HTMLElement {
    connectedCallback() {
        const variant = this.getAttribute('variant') || 'private';
        const currentPath = window.location.pathname;

        // Helper to check if a path is active
        const isActive = (path: string) => {
            if (path === '/' && currentPath === '/') return true;
            if (path !== '/' && currentPath.startsWith(path)) return true;
            return false;
        };

        const activeClass = "relative pb-1 text-it-magenta font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-it-magenta";
        const inactiveClass = "hover:text-it-magenta transition-colors text-it-dark font-normal";
        const inactiveMobileClass = "text-it-dark text-sm hover:text-it-magenta";
        const activeMobileClass = "text-it-magenta font-semibold text-sm";

        this.innerHTML = `
            <nav class="w-full bg-white border-b border-gray-100 flex-none relative z-20">
                <div class="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
                    <!-- Logo -->
                    <a href="/" class="flex-shrink-0">
                        <img src="${logoUrl}" alt="ITAlumni Logo" class="h-8 w-auto">
                    </a>

                    <!-- Nav links (desktop) -->
                    <ul class="hidden md:flex items-center gap-8 text-sm">
                        <li>
                            <a href="/" class="${isActive('/') ? activeClass : inactiveClass}">Inici</a>
                        </li>
                        <li>
                            <a href="/pages/xarxa/" class="${isActive('/pages/xarxa/') ? activeClass : inactiveClass}">Xarxa</a>
                        </li>
                        <li>
                            <a href="/pages/jobs/" class="${isActive('/pages/jobs/') ? activeClass : inactiveClass}">Oportunitats de feina</a>
                        </li>
                        <li>
                            <a href="/pages/events/" class="${isActive('/pages/events/') ? activeClass : inactiveClass}">Esdeveniments</a>
                        </li>
                    </ul>

                    <!-- Rights UI depending on variant -->
                    ${variant === 'public' ? `
                    <!-- CTA Buttons (Logged Out) -->
                    <div class="hidden md:flex items-center gap-3">
                        <a href="/pages/signup/"
                            class="flex items-center gap-2 border border-it-magenta text-it-magenta text-sm font-normal px-5 py-2 rounded-md hover:bg-it-magenta-light transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <polyline points="3 7 12 13 21 7" />
                            </svg>
                            Apunta't
                        </a>
                        <a href="#"
                            class="flex items-center gap-2 bg-it-gradient text-white text-sm font-normal px-5 py-2 rounded-md hover:opacity-90 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            Com et veuen?
                        </a>
                    </div>
                    ` : `
                    <!-- Right Icons (Logged In) -->
                    <div class="hidden md:flex items-center gap-5">
                        <button aria-label="Search" class="text-it-dark hover:text-it-magenta transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>
                        <button aria-label="Notifications" class="text-it-dark hover:text-it-magenta transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                            </svg>
                        </button>
                        <button aria-label="Settings" class="text-it-dark hover:text-it-magenta transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="3"></circle>
                                <path
                                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                                </path>
                            </svg>
                        </button>
                        <button aria-label="Profile" class="flex items-center">
                            <img src="https://i.pravatar.cc/150?u=logged_user" alt="User Avatar"
                                class="w-8 h-8 rounded-full border border-gray-200 hover:ring-2 hover:ring-it-magenta hover:ring-offset-1 transition-all">
                        </button>
                    </div>
                    `}

                    <!-- Mobile hamburger -->
                    <button id="mobile-menu-toggle" class="md:hidden flex flex-col gap-1.5 p-2" aria-label="Obrir menu">
                        <span class="block w-6 h-0.5 bg-it-dark"></span>
                        <span class="block w-6 h-0.5 bg-it-dark"></span>
                        <span class="block w-6 h-0.5 bg-it-dark"></span>
                    </button>
                </div>

                <!-- Mobile menu -->
                <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
                    <a href="/" class="${isActive('/') ? activeMobileClass : inactiveMobileClass}">Inici</a>
                    <a href="/pages/xarxa/" class="${isActive('/pages/xarxa/') ? activeMobileClass : inactiveMobileClass}">Xarxa</a>
                    <a href="/pages/jobs/" class="${isActive('/pages/jobs/') ? activeMobileClass : inactiveMobileClass}">Oportunitats de feina</a>
                    <a href="/pages/events/" class="${isActive('/pages/events/') ? activeMobileClass : inactiveMobileClass}">Esdeveniments</a>
                    
                    ${variant === 'public' ? `
                    <div class="flex flex-col gap-3 pt-2">
                        <a href="/pages/signup/"
                            class="flex items-center justify-center gap-2 border border-it-magenta text-it-magenta text-sm py-2.5 rounded-md hover:bg-it-magenta-light">
                            Apunta't
                        </a>
                        <a href="#"
                            class="flex items-center justify-center gap-2 bg-it-gradient text-white text-sm py-2.5 rounded-md hover:opacity-90">
                            Com et veuen?
                        </a>
                    </div>
                    ` : ''}
                </div>
            </nav>
        `;

        // Attach event listener for mobile menu
        setTimeout(() => {
            const toggle = this.querySelector('#mobile-menu-toggle');
            const menu = this.querySelector('#mobile-menu');
            if (toggle && menu) {
                toggle.addEventListener('click', () => {
                    menu.classList.toggle('hidden');
                });
            }
        }, 0);
    }
}

customElements.define('app-header', AppHeader);
