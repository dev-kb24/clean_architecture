import express from 'express';
import { FindAllUseCase } from '../../application/useCases/messages/findAll.useCase';
import { MessageRepository } from '../repositories/messages.repository';
import { MessagesController } from '../../exposition/controllers/messages.controller';

export class MessagesRouter{
    router: express.Router;

    constructor(){
        this.router = express.Router();
    }

    public routes() : express.Router{
       return this.router.get('/findAll', this.findAll);
    }

    private async findAll(req: express.Request,res: express.Response){
        const findAllUseCase = new FindAllUseCase(new MessageRepository());
        const messagesController =  new MessagesController(findAllUseCase);
        try {
            const result = await messagesController.findAll();
            res.status(200).json(result);
        } catch (error) {
            throw error;
        }
    }
}