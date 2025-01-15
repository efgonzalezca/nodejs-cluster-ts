import { Application, Router } from 'express';

import { router as mathRouter } from './math.route';

export const routerApi: Function = (app: Application) => {
  const router = Router();
  app.use('/', router);
  router.use('/math', mathRouter);
}