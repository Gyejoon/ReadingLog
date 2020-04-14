import express, { Response } from 'express';
import { localRegister, localLogin } from './auth.ctrl';

const router = express.Router();

router.post('/register/local', localRegister);
router.post('/login/local', localLogin);
router.post('/logout', async (_, res: Response) => {
  res.clearCookie('access_token', {
    domain:
      process.env.NODE_ENV === 'development'
        ? undefined
        : '.reading-log.coo.kr',
  });

  res.clearCookie('refresh_token', {
    domain:
      process.env.NODE_ENV === 'development'
        ? undefined
        : '.reading-log.coo.kr',
  });

  res.status(204);
  return res.json({});
});

export default router;
