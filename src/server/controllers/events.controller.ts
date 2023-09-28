import { Controller, Get } from "@nestjs/common";
import { EventsService } from "../services/events.service";

@Controller("events")
export class EventsController {
    constructor(private eventsService: EventsService) { };

    @Get()
    public getEvents() {
        return this.eventsService.getEvents();
    };
};