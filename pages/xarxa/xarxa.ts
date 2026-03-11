import { AlumniManager } from '../../src/features/alumni/scripts/alumniManager.js';
import type { Alumnus } from '../../src/features/alumni/types/alumni.types.js';

function generateAlumniCard(alumnus: Alumnus): string {
    return `
        <div class="flex flex-col">
            <h4 class="font-semibold text-it-dark text-base">${alumnus.firstName} ${alumnus.lastName}</h4>
            <p class="text-sm text-gray-500 mt-2">${alumnus.title}</p>
            <p class="text-sm text-gray-500 mt-1 mb-5">${alumnus.location}</p>
            <button class="bg-it-magenta text-white py-1.5 px-8 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                Message
            </button>
        </div>
    `;
}

async function initXarxaPage(): Promise<void> {
    const alumniGrid = document.getElementById('alumni-grid');

    if (!alumniGrid) {
        console.error('Missing #alumni-grid element');
        return;
    }

    const alumniManager = new AlumniManager();
    await alumniManager.loadAlumni();

    const alumniList = alumniManager.getAllAlumni();

    // Render all alumni as cards in the grid
    alumniGrid.innerHTML = alumniList
        .map(generateAlumniCard)
        .join('');
}

document.addEventListener('DOMContentLoaded', initXarxaPage);
