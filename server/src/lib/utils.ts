import { Request, Response } from 'express';
import Joi from 'joi';
import crypto from 'crypto';

export const validateBody = (
  req: Request,
  res: Response,
  schema: Joi.SchemaLike,
) => {
  const validation = Joi.validate(req.body, schema);
  if (validation.error) {
    res.status(400);
    res.json({
      name: 'WRONG_SCHEMA',
      payload: validation.error,
    });
    return false;
  }
  return true;
};

export function hash(text: string) {
  const authKey = process.env.AUTH_KEY;

  if (!authKey) {
    throw new Error('Please set AUTH_KEY Environment variable');
  }

  const hashed = crypto
    .createHmac('sha256', authKey)
    .update(text)
    .digest('base64');

  return hashed;
}
