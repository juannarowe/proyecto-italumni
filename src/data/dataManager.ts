import type { Alumnus } from '../features/alumni/alumni.types.js';

export class DataManager {
    private apiUrl: string = '/src/data/alumni.json';

    async fetchAlumni(): Promise<Alumnus[]> {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            console.error("DataManager Error:", error);
            return [];
        }
    }
}