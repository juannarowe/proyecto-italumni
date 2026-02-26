// src/features/alumni/alumniManager.ts

import { DataManager } from '../../../scripts/dataManager.js';
import { API_CONFIG } from '../../../config/api.config.js';
import type { Alumnus } from '../types/alumni.types.js';

export class AlumniManager {
    private dataManager: DataManager;
    private alumni: Alumnus[] = [];

    constructor() {
        this.dataManager = new DataManager();
    }

    async loadAlumni(): Promise<void> {
        // 1. Usamos el método agnóstico 'getData'
        // 2. Le pasamos el tipo <Alumnus> para que TypeScript esté contento
        // 3. Usamos la URL desde la configuración (API_CONFIG.ALUMNI)
        this.alumni = await this.dataManager.getData<Alumnus>(API_CONFIG.ALUMNI);
    }

    getAllAlumni(): Alumnus[] {
        return this.alumni;
    }

    // Ejemplo de cómo podrías filtrar si quisieras, ya que tienes los datos en 'this.alumni'
    getAlumniById(id: number): Alumnus | undefined {
        return this.alumni.find(alumnus => alumnus.id === id);
    }
}