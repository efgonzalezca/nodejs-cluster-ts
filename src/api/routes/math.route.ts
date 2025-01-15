import { Router } from 'express';

import { fibonacci } from '../controllers';

export const router: Router = Router();

router.get(
  '/fibonacci',
  fibonacci
)