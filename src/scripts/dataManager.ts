export class DataManager {
    
    async getData<T>(url: string): Promise<T[]> {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
            
            // Retorna los datos convertidos a JSON
            return await response.json() as T[];
        } catch (error) {
            console.error("DataManager Error:", error);
            return [];
        }
    }
}