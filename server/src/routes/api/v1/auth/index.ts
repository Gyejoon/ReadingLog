import express, { Response } from 'express';
import { localRegister, localLogin } from './auth.ctrl';

const router = express.Router();

router.post('/register/local', localRegister);
router.post('/login/local', localLogin);
router.post('/logout', (_, res: Response) => {
  res.cookie('access_token', '', {
    domain:
      process.env.NODE_ENV === 'development'
        ? undefined
        : '.reading-log.coo.kr',
  });

  res.cookie('refresh_token', '', {
    domain:
      process.env.NODE_ENV === 'development'
        ? undefined
        : '.reading-log.coo.kr',
  });
});

export default router;
