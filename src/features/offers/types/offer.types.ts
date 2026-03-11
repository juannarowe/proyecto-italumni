// src/features/offers/types/offer.types.ts

/**
 * Main interface for a Job Offer
 */
export interface Offer {
    id: number;
    title: string;
    subtitle: string;
    meta: string;
    type: string;
    ctaLabel: string;
    image: string;
}
