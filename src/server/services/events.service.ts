import { Inject, Injectable, forwardRef } from "@nestjs/common";
import { EventsGateway } from "../gateways/events.gateway";

@Injectable()
export class EventsService {
    constructor(
        @Inject(forwardRef(() => EventsGateway))
        private eventsGateway: EventsGateway
    ) {
        this.eventsGateway;
    };

    public async getEvents() {
        return [];
    };
};