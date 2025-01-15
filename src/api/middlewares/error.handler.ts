import { NextFunction, Request, Response } from 'express';

import { logger, getExtraParams } from '../../utils';

export const errorHandler = (err: Error, req: Request, res: Response, _next: NextFunction): any => {
  logger.error(err.message, getExtraParams(req));
  return res
    .status(500)
    .json({error: {
      message: 'Internal server error'
    }})
}