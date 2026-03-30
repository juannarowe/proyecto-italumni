// src/features/alumni/alumniManager.ts
import { DataManager } from '../../../scripts/dataManager';
import { API_CONFIG } from '../../../config/api.config';
export class AlumniManager {
    dataManager;
    alumni = [];
    constructor() {
        this.dataManager = new DataManager();
    }
    async loadAlumni() {
        // 1. Usamos el método agnóstico 'getData'
        // 2. Le pasamos el tipo <Alumnus> para que TypeScript esté contento
        // 3. Usamos la URL desde la configuración (API_CONFIG.ALUMNI)
        this.alumni = await this.dataManager.getData(API_CONFIG.ALUMNI);
    }
    getAllAlumni() {
        return this.alumni;
    }
    // Ejemplo de cómo podrías filtrar si quisieras, ya que tienes los datos en 'this.alumni'
    getAlumniById(id) {
        return this.alumni.find(alumnus => alumnus.id === id);
    }
}
//# sourceMappingURL=alumniManager.js.map