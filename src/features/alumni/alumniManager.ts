import { DataManager } from '../../data/dataManager.js';
import type { Alumnus } from './alumni.types.js';

export class AlumniManager {
    private dataManager: DataManager;
    private alumni: Alumnus[] = [];

    constructor() {
        this.dataManager = new DataManager();
    }

    async loadAlumni(): Promise<void> {
        this.alumni = await this.dataManager.fetchAlumni();
    }

    getAllAlumni(): Alumnus[] {
        return this.alumni;
    }
}