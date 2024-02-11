import express from 'express';
import AppDataSource from './dataSource/dataSource';
import { MessagesRouter } from './router/messages.router'
export class Server {
  app: express.Application;
  port: number;
  router: express.Router;

  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.getModules();
  }

  getModules(){
    this.app.use("/messages", new MessagesRouter().routes());
  }

  async start() {
    try {
      await AppDataSource.initialize();
      if(this.port){
        this.app.listen(this.port, () => {   
          console.log(`Server is running on port ${this.port}`);
        });
      }
    } catch (error) {
      throw error;
    }
  }
}



