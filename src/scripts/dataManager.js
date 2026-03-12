export class DataManager {
    async getData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok)
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            // Retorna los datos convertidos a JSON
            return await response.json();
        }
        catch (error) {
            console.error("DataManager Error:", error);
            return [];
        }
    }
}
//# sourceMappingURL=dataManager.js.map