import { Request, Response } from 'express';
import Joi from 'joi';
import { validateBody, hash } from '@/lib/utils';
import { getRepository } from 'typeorm';
import User from '@/entity/User';
import UserProfile from '@/entity/UserProfile';
import { setTokenCookie } from '@/lib/token';

export const localLogin = async (req: Request, res: Response) => {
  type RequestBody = {
    username: string;
    password: string;
  };

  const schema = Joi.object().keys({
    username: Joi.string().min(1).max(50).required(),
    password: Joi.string().min(1).max(20).required(),
  });

  if (!validateBody(req, res, schema)) {
    return;
  }

  const { username, password } = req.body as RequestBody;

  const foundUser = await getRepository(User).findOne({
    where: [{ username }],
  });

  if (!foundUser) {
    res.status(404);
    res.json({
      name: 'NOT_FOUND_USER',
      payload: 'username',
    });
    return;
  }

  if (foundUser.password !== hash(password)) {
    res.status(401);
    res.json({
      name: 'INVALID_PASSWORD',
      payload: 'password',
    });
    return;
  }

  const tokens = await foundUser.generateUserToken();

  setTokenCookie(res, tokens);

  return res.json({
    tokens,
  });
};

export const localRegister = async (req: Request, res: Response) => {
  type RequestBody = {
    username: string;
    password: string;
    nickname: string;
    mobile_phone_number: string | null;
  };

  const schema = Joi.object().keys({
    username: Joi.string().min(1).max(50).required(),
    password: Joi.string().min(1).max(20).required(),
    nickname: Joi.string().min(1).max(50).required(),
    mobile_phone_number: Joi.string(),
  });

  if (!validateBody(req, res, schema)) {
    return;
  }

  const {
    username,
    password,
    nickname,
    mobile_phone_number,
  } = req.body as RequestBody;

  const exists = await getRepository(User).findOne({
    where: [{ username }],
  });

  if (exists) {
    res.status(409);
    res.json({
      name: 'ALREADY_EXISTS',
      payload: 'username',
    });
    return;
  }

  const existsNickName = await getRepository(UserProfile).findOne({
    where: [{ nickname }],
  });

  if (existsNickName) {
    res.status(409);
    res.json({
      name: 'ALREADY_EXISTS',
      payload: 'nickname',
    });
    return;
  }

  const newUser = new User();
  newUser.username = username;
  newUser.password = hash(password);
  await getRepository(User).save(newUser);

  const newProfile = new UserProfile();
  newProfile.fk_user_id = newUser.id;
  newProfile.nickname = nickname;
  newProfile.mobile_phone_number = mobile_phone_number;
  await getRepository(UserProfile).save(newProfile);

  const tokens = await newUser.generateUserToken();

  return res.json({
    ...newUser,
    profile: {
      ...newProfile,
    },
    tokens,
  });
};
