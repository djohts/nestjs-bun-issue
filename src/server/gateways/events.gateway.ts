import { Inject, Injectable, Logger, forwardRef } from "@nestjs/common";
import { ConnectedSocket, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import type { Server, Socket } from "socket.io";
import { EventsService } from "../services/events.service";

@Injectable()
@WebSocketGateway({
    path: "/events",
    cors: {
        origin: "*"
    }
})
export class EventsGateway {
    constructor(
        @Inject(forwardRef(() => EventsService))
        private eventsService: EventsService
    ) {
        this.eventsService
    };

    @WebSocketServer()
    server!: Server;

    logger = new Logger(EventsGateway.name);

    afterInit() {
        this.logger.log("Initialized");
    };

    @SubscribeMessage("get events")
    async getEvents(
        @ConnectedSocket() client: Socket
    ) {
        client.emit("new event", { foo: "bar" })
    };
};