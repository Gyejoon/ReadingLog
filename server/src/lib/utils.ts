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

export const createHashSha512 = (text: string) => {
  return crypto
    .createHash('sha512')
    .update(text)
    .digest('base64');
};
