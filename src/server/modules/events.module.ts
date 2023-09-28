import { Module } from "@nestjs/common";
import { EventsController } from "../controllers/events.controller";
import { EventsGateway } from "../gateways/events.gateway";
import { EventsService } from "../services/events.service";

@Module({
    controllers: [EventsController],
    providers: [
        EventsService,
        EventsGateway
    ]
})
export class EventsModule { };