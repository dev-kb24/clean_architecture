import { Messages } from "../../domain/entities/messages.entity";

export interface MessagesInterface {
    findAll(): Promise<Messages[]>
}