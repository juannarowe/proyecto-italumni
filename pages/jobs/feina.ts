import { OfferManager } from '../../src/features/offers/scripts/offerManager.js';
import type { Offer } from '../../src/features/offers/types/offer.types.js';

function generateOfferCard(offer: Offer): string {
    return `
        <div class="border border-gray-200 rounded-xl bg-white flex items-stretch shadow-sm" style="min-height:160px;">
            <!-- Text content -->
            <div class="flex flex-col justify-between p-5 flex-1">
                <div>
                    <h3 class="font-semibold text-it-dark" style="font-size:16px;line-height:1.3;">${offer.title}</h3>
                    <p class="text-gray-400 mt-2" style="font-size:13px;">${offer.subtitle}</p>
                    <p class="text-gray-400 mt-1" style="font-size:13px;">${offer.meta}</p>
                </div>
                <button class="border border-it-magenta text-it-magenta hover:bg-it-magenta-light transition-colors" style="font-size:13px;padding:3px 14px;border-radius:6px;margin-top:14px;display:inline-block;width:fit-content;width:-webkit-fit-content;cursor:pointer;">
                    ${offer.ctaLabel}
                </button>
            </div>
            <!-- Image right, with inset 8px margin all sides -->
            ${offer.image ? `
            <div style="width:160px;flex-shrink:0;padding:8px 8px 8px 0;">
                <img src="${offer.image}" alt="${offer.title}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;display:block;">
            </div>` : ''}
        </div>
    `;
}

async function initFeinaPage(): Promise<void> {
    const jobsGrid = document.getElementById('jobs-grid');

    if (!jobsGrid) {
        console.error('Missing #jobs-grid element');
        return;
    }

    const offerManager = new OfferManager();
    await offerManager.loadOffers();

    const offersList = offerManager.getAllOffers();

    // Render all offers as cards in the grid
    jobsGrid.innerHTML = offersList
        .map(generateOfferCard)
        .join('');
}

document.addEventListener('DOMContentLoaded', initFeinaPage);
