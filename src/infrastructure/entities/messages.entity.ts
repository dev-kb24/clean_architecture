import { Entity, Column, ObjectIdColumn } from "typeorm"
import { Messages } from "../../domain/entities/messages.entity"

@Entity('messages')
export class MessagesEntity implements Messages{
    @ObjectIdColumn()
    _id: string

    @Column()
    name: string

    @Column()
    description: string
}