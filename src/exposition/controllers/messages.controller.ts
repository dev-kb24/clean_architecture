import { FindAllUseCase } from "../../application/useCases/messages/findAll.useCase";
import { MessagesPresenter } from "../presenters/messages.presenter";

export class MessagesController {

    constructor(private readonly messagesUseCase: FindAllUseCase){}

    async findAll() {
        const messages = await this.messagesUseCase.execute();
        return messages.map(message => new MessagesPresenter(message).getPresenter());
    }
}