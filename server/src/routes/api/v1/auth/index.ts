import express from 'express';
import { localRegister, localLogin } from './auth.ctrl';

const router = express.Router();

router.post('/register/local', localRegister);
router.post('/login/local', localLogin);

export default router;
