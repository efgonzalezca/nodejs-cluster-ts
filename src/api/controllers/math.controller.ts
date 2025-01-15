import { NextFunction, Request, Response } from 'express';

import { getExtraParams, logger } from '../../utils';
import { FibonacciSeries } from '../../models/FibonacciSeries';

export const fibonacci = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  let { number } = <{ number: number }><unknown>req.query;
  try {
    if(number === undefined) {
      return res
        .status(400)
        .json({
          message: 'The number is required'
        })
    }
    const result = FibonacciSeries.calculateFibonacciValue(number);
    logger.info(`Calculation of the fibonacci series for the number ${ number }`, getExtraParams(req));
    return res
      .status(200)
      .json({
        result: result,
        message: `Calculation of the fibonacci series for the number ${ number }`
      })
  } catch(err) {
    return next(err);
  }
}