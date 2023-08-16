import { Request, Response } from 'express';
import { getTransactionHistory } from '../services/historyServices';

export const fetchTransactionHistory = async (req: Request, res: Response) => {
  try {
    const { address } = req.params;
    
    if (!address) {
      return res.status(400).json({ error: 'Missing address parameter.' });
    }

    const history = await getTransactionHistory(address);
    
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching transaction history.' });
  }
};
