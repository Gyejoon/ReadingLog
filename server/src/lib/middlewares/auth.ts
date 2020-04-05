import { Request, Response, NextFunction } from 'express';
import { decodeToken } from '../token';
import logger from '@/logger';

export const getTokenFromHeader = (authorization?: string) => {
  if (authorization && authorization.split(' ')[0] === 'Bearer') {
    return authorization.split(' ')[1];
  }

  return;
};

export const authorization = async (
  req: Request,
  _: Response,
  next: NextFunction,
) => {
  const token = getTokenFromHeader(req.headers.authorization);

  if (!token) {
    return next();
  }

  try {
    const decoded = await decodeToken(token);

    if (decoded) {
      req.app.set('userId', decoded.user_id);
    }
  } catch (e) {
    logger.error(e);
  }

  return next();
};
