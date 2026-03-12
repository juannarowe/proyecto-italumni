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
    title: string;
    stack: string[];
    availability: Availability;
    imageUrl: string;
    location: string;
    linkedInUrl?: string;
    githubUrl?: string;
}
//# sourceMappingURL=alumni.types.d.ts.map