import * as jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import User from '@/entity/User';

const authKey = process.env.AUTH_KEY;

if (!authKey) {
  const error = new Error('InvalidSecretKeyError');
  error.message = 'Secret key for JWT is missing.';
  if (process.env.npm_lifecycle_event !== 'typeorm') throw error;
}

export const generateToken = (
  payload: any,
  options?: jwt.SignOptions,
): Promise<string> => {
  const jwtOptions: jwt.SignOptions = {
    issuer: 'reading-log.coo.kr',
    expiresIn: '7d',
    ...options,
  };

  if (!jwtOptions.expiresIn) {
    // removes expiresIn when expiresIn is given as undefined
    delete jwtOptions.expiresIn;
  }
  return new Promise((resolve, reject) => {
    if (!authKey) return;
    jwt.sign(payload, authKey, jwtOptions, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};

export const decodeToken = <T = any>(token: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    if (!authKey) return;
    jwt.verify(token, authKey, (err, decoded) => {
      if (err) reject(err);
      console.log(err);
      resolve(decoded as any);
    });
  });
};

type TokenData = {
  iat: number;
  exp: number;
  sub: string;
  iss: string;
};

type RefreshTokenData = {
  user_id: string;
} & TokenData;

export const refresh = async (refreshToken: string) => {
  try {
    const decoded = await decodeToken<RefreshTokenData>(refreshToken);
    const user = await getRepository(User).findOne(decoded.user_id);
    if (!user) {
      const error = new Error('InvalidUserError');
      throw error;
    }
    return await user.refreshUserToken(decoded.exp, refreshToken);
  } catch (e) {
    throw e;
  }
};
