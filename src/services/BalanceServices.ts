import BalanceModel from '../models/balanceModel';

export const getBalance = async (address: string) => {
  try {
    const balance = await BalanceModel.findOne({ address });

    return balance;
  } catch (error) {
    throw new Error('Error fetching balance');
  }
};
