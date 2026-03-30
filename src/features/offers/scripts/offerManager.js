// src/features/offers/offerManager.ts
import { DataManager } from '../../../scripts/dataManager';
import { API_CONFIG } from '../../../config/api.config';
export class OfferManager {
    dataManager;
    offers = [];
    constructor() {
        this.dataManager = new DataManager();
    }
    async loadOffers() {
        this.offers = await this.dataManager.getData(API_CONFIG.OFFERS);
    }
    getAllOffers() {
        return this.offers;
    }
    getOfferById(id) {
        return this.offers.find(offer => offer.id === id);
    }
}
//# sourceMappingURL=offerManager.js.map