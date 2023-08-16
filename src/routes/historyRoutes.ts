import express from 'express';
import { fetchTransactionHistory } from '../controllers/historyController';

const router = express.Router();

router.get('/:address', fetchTransactionHistory);

export default router;