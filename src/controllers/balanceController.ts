import { Request, Response } from 'express';
import { getBalance } from '../services/BalanceServices';

export const fetchBalance = async (req: Request, res: Response) => {
  try {
    const { address } = req.params;
    
    if (!address) {
      return res.status(400).json({ error: 'Missing address parameter.' });
    }

    const balance = await getBalance(address);

    res.send(balance);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the balance.' });
  }
};
