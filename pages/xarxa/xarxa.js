import { AlumniManager } from '../../src/features/alumni/scripts/alumniManager.js';
function generateAlumniCard(alumnus) {
    return `
        <div class="flex flex-col items-start">
            <h4 class="font-semibold text-it-dark text-base">${alumnus.firstName} ${alumnus.lastName}</h4>
            <p class="text-sm text-gray-500 mt-2">${alumnus.title}</p>
            <p class="text-sm text-gray-500 mt-1 mb-5">${alumnus.location}</p>
            <button class="bg-it-magenta text-white py-1.5 px-8 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                Message
            </button>
        </div>
    `;
}
// Global state
let allAlumni = [];
let currentSort = 'recent';
let searchQuery = '';
function renderAlumni(alumniList) {
    const alumniGrid = document.getElementById('alumni-grid');
    if (!alumniGrid)
        return;
    if (alumniList.length === 0) {
        alumniGrid.innerHTML = '<p class="text-gray-500 col-[1/-1] text-center py-10 w-full">Cap exalumne trobat amb aquests filtres.</p>';
        return;
    }
    alumniGrid.innerHTML = alumniList.map(generateAlumniCard).join('');
}
function applyFiltersAndSort() {
    let filtered = [...allAlumni];
    // 1. Search Query Filter
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(a => a.firstName.toLowerCase().includes(query) ||
            a.lastName.toLowerCase().includes(query) ||
            a.title.toLowerCase().includes(query) ||
            (a.location && a.location.toLowerCase().includes(query)) ||
            (a.stack && a.stack.some(tech => tech.toLowerCase().includes(query))));
    }
    // 2. Sort Logic (Mock behaviour since API is static)
    if (currentSort === 'recent') {
        // "Recent Activity": Sort by ID descending (mock standard)
        filtered.sort((a, b) => b.id - a.id);
    }
    else if (currentSort === 'popular') {
        // "Popular": Mock by number of skills in stack
        filtered.sort((a, b) => (b.stack?.length || 0) - (a.stack?.length || 0));
    }
    else if (currentSort === 'connected') {
        // "Most Connected": Sort alphabetically by First Name
        filtered.sort((a, b) => a.firstName.localeCompare(b.firstName));
    }
    renderAlumni(filtered);
}
function setupFilters() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            applyFiltersAndSort();
        });
    }
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.currentTarget;
            const sort = target.getAttribute('data-sort');
            if (sort) {
                currentSort = sort;
                // Update active styling
                filterBtns.forEach(b => {
                    b.className = 'filter-btn text-gray-500 hover:text-it-dark transition-colors';
                });
                target.className = 'filter-btn text-it-magenta font-semibold';
                applyFiltersAndSort();
            }
        });
    });
}
async function initXarxaPage() {
    const alumniManager = new AlumniManager();
    await alumniManager.loadAlumni();
    allAlumni = alumniManager.getAllAlumni();
    setupFilters();
    applyFiltersAndSort();
}
document.addEventListener('DOMContentLoaded', initXarxaPage);
//# sourceMappingURL=xarxa.js.map