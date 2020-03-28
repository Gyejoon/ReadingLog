import express from 'express';
import v1Router from './v1';

const router = express.Router();

router.get('/version', (_, res) => {
  return res.json({
    version: ['v1'],
  });
});
router.use('/v1', v1Router);

export default router;
