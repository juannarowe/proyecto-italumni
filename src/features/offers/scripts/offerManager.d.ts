import type { Offer } from '../types/offer.types';
export declare class OfferManager {
    private dataManager;
    private offers;
    constructor();
    loadOffers(): Promise<void>;
    getAllOffers(): Offer[];
    getOfferById(id: number): Offer | undefined;
}
//# sourceMappingURL=offerManager.d.ts.map