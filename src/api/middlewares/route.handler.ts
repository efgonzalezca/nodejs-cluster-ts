import { NextFunction, Request, Response } from 'express';

import { getExtraParams, logger } from '../../utils';

export const routeHandler = (req: Request, res: Response, _next: NextFunction): any => {
  logger.warn(`The requested URL ${ req.originalUrl } was not found on the server`, getExtraParams(req));
  return res
    .status(404)
    .json({error: {
      message: `The requested URL ${ req.originalUrl } was not found on the server`
    }})
}