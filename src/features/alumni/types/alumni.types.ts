// src/features/alumni/alumni.types.ts

/**
 * Valid availability statuses according to the functional analysis
 */
export type Availability = 'Looking for a job' | 'Employed' | 'Open to offers';

/**
 * Main interface for an IT Academy Alumnus
 */
export interface Alumnus {
    id: number;
    firstName: string;
    lastName: string;
    title: string;         // e.g., "Frontend Developer"
    stack: string[];       // Technologies for filtering (Level 2)
    availability: Availability;
    imageUrl: string;
    location: string;      // Required for filtering (Level 2)
    linkedInUrl?: string;
    githubUrl?: string;
}