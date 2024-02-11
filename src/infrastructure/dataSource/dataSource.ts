import { DataSource } from "typeorm";
import { MessagesEntity } from "../entities/messages.entity";
import 'dotenv/config'
const AppDataSource = new DataSource({
    type: "mongodb",
    host: process.env.HOST,
    port: Number(process.env.PORT_DB),
    database: process.env.DATABASE,
    entities: [MessagesEntity],
});

export default AppDataSource;