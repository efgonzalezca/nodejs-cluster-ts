import { Server as HTTPServer } from 'http';

import cors from 'cors';
import express, { Application } from 'express';

import config from '../config';
import { logger } from '../utils/';
import { routerApi } from '../api/routes';
import { errorHandler, routeHandler } from '../api/middlewares';

export class Server {
  private app: Application;
  private port: number;
  private httpServer: HTTPServer;

  constructor() {
    this.port = config.port;
    this.app = express();
    this.httpServer = new HTTPServer(this.app);
  }

  private middlewares() {
    this.app.use(cors({origin: '*'}));
    routerApi(this.app);
    this.app.use(errorHandler);
    this.app.use(routeHandler);
  }

  async listen(): Promise<void> {
    return new Promise(resolve => {
      this.middlewares();
      this.httpServer?.listen(this.port, () => {
        logger.info('HTTP server connected');
        console.log(`Server running on: http://localhost:${config.port}`);
      })
      resolve();
    })
  }

  get HTTPServer() {
    return this.httpServer;
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        })
      }
      return resolve();
    })
  }
}