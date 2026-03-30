import { EventManager } from '../../src/features/events/scripts/eventManager.js';
import type { Event } from '../../src/features/events/types/event.types.js';

function formatDate(dateStr: string): string {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' });
}

function generateEventCard(event: Event): string {
    return `
        <div class="border border-gray-200 rounded-xl bg-white flex items-stretch shadow-sm" style="min-height:160px;">
            <!-- Calendar icon column -->
            <div style="width:72px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#fdf2f7;border-radius:0;padding:16px 8px;gap:2px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="#c8007e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span style="font-size:11px;color:#c8007e;font-weight:600;text-align:center;margin-top:4px;">${formatDate(event.date)}</span>
            </div>
            <!-- Text content -->
            <div class="flex flex-col justify-between p-5 flex-1">
                <div>
                    <h3 class="font-semibold text-it-dark" style="font-size:16px;line-height:1.3;">${event.name}</h3>
                    <p class="text-gray-400 mt-2" style="font-size:13px;">${event.description}</p>
                    <p class="text-gray-400 mt-1" style="font-size:13px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            style="display:inline;vertical-align:middle;margin-right:3px;">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        ${event.location}
                    </p>
                </div>
                <button class="border border-it-magenta text-it-magenta hover:bg-it-magenta-light transition-colors"
                    style="font-size:13px;padding:3px 14px;border-radius:6px;margin-top:14px;display:inline-block;width:fit-content;width:-webkit-fit-content;cursor:pointer;">
                    M'interessa
                </button>
            </div>
        </div>
    `;
}

async function initEventsPage(): Promise<void> {
    const eventsGrid = document.getElementById('events-grid');

    if (!eventsGrid) {
        console.error('Missing #events-grid element');
        return;
    }

    const eventManager = new EventManager();
    await eventManager.loadEvents();

    const eventsList = eventManager.getAllEvents();

    // Render all events as cards in the grid
    eventsGrid.innerHTML = eventsList
        .map(generateEventCard)
        .join('');
}

document.addEventListener('DOMContentLoaded', initEventsPage);
