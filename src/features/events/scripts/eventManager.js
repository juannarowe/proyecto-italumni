// src/features/events/scripts/eventManager.ts
import { DataManager } from '../../../scripts/dataManager';
import { API_CONFIG } from '../../../config/api.config';
export class EventManager {
    dataManager;
    events = [];
    constructor() {
        this.dataManager = new DataManager();
    }
    async loadEvents() {
        this.events = await this.dataManager.getData(API_CONFIG.EVENTS);
    }
    getAllEvents() {
        return this.events;
    }
    getEventById(id) {
        return this.events.find(event => event.id === id);
    }
}
//# sourceMappingURL=eventManager.js.map