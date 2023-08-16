import express from 'express';
import { fetchBalance  } from '../controllers/balanceController';

const router = express.Router();

router.get('/:address', fetchBalance);

export default router;
