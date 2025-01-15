import cluster from 'cluster';
import { availableParallelism } from 'os';

import 'dotenv/config';

import { Server } from './models';
import { logger } from './utils';

try {
  if (cluster.isPrimary) {
    const numCPUs = availableParallelism();
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
    cluster.on('online', worker => {
      logger.info(`Worker ${worker.id} online`);
    })
    cluster.on('exit', (worker, _code, _signal) => {
      logger.info(`Worker ${worker.id} is dead: ${worker.isDead()}`);
      cluster.fork();
    })
  } else {
    new Server().listen();
    process.on('SIGINT', () => {
      process.exit(0);
    })
    process.on('SIGTERM', () => {
      process.exit(0);
    })
  }
} catch (e) {
  console.log(e);
  process.exit(1);
}