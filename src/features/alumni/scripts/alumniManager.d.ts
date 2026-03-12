import type { Alumnus } from '../types/alumni.types';
export declare class AlumniManager {
    private dataManager;
    private alumni;
    constructor();
    loadAlumni(): Promise<void>;
    getAllAlumni(): Alumnus[];
    getAlumniById(id: number): Alumnus | undefined;
}
//# sourceMappingURL=alumniManager.d.ts.map