import type { Event } from '../types/event.types';
export declare class EventManager {
    private dataManager;
    private events;
    constructor();
    loadEvents(): Promise<void>;
    getAllEvents(): Event[];
    getEventById(id: number): Event | undefined;
}
//# sourceMappingURL=eventManager.d.ts.map