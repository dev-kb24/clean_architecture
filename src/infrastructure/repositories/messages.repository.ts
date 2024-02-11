import {Repository } from "typeorm";
import AppDataSource from "../dataSource/dataSource";
import { MessagesEntity } from "../entities/messages.entity";
import { MessagesInterface } from "../../application/interfaces/messages.interface";

export class MessageRepository implements MessagesInterface{
    repository: Repository<MessagesEntity>;
    constructor() {
        this.repository = AppDataSource.getRepository(MessagesEntity);
    }

    async findAll() {
        return await this.repository.find();
    }
}