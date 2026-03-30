// src/features/offers/offerManager.ts

import { DataManager } from '../../../scripts/dataManager';
import { API_CONFIG } from '../../../config/api.config';
import type { Offer } from '../types/offer.types';

export class OfferManager {
    private dataManager: DataManager;
    private offers: Offer[] = [];

    constructor() {
        this.dataManager = new DataManager();
    }

    async loadOffers(): Promise<void> {
        this.offers = await this.dataManager.getData<Offer>(API_CONFIG.OFFERS);
    }

    getAllOffers(): Offer[] {
        return this.offers;
    }

    getOfferById(id: number): Offer | undefined {
        return this.offers.find(offer => offer.id === id);
    }
}
