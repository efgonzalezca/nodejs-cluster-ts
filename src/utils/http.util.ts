import { Request } from 'express';

export const getIpAddress = (req: Request) => {
  if (req.headers['x-forwarded-for'] && typeof req.headers['x-forwarded-for'] === 'string') {
    return req.headers['x-forwarded-for'].split(',')[0];
  }
  return undefined;
}