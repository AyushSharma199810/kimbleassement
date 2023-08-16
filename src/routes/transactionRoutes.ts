import express from 'express';
import { makeTransaction } from '../controllers/transactionController';

const router = express.Router();

router.post('/', makeTransaction);

export default router;