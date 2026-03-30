// src/features/events/scripts/eventManager.ts

import { DataManager } from '../../../scripts/dataManager';
import { API_CONFIG } from '../../../config/api.config';
import type { Event } from '../types/event.types';

export class EventManager {
    private dataManager: DataManager;
    private events: Event[] = [];

    constructor() {
        this.dataManager = new DataManager();
    }

    async loadEvents(): Promise<void> {
        this.events = await this.dataManager.getData<Event>(API_CONFIG.EVENTS);
    }

    getAllEvents(): Event[] {
        return this.events;
    }

    getEventById(id: number): Event | undefined {
        return this.events.find(event => event.id === id);
    }
}
