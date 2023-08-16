import TransactionModel from '../models/transactionModel';

export const getTransactionHistory = async (address: string) => {
  try {
    const history = await TransactionModel.find({ $or: [{ from: address }, { to: address }] })
      .sort({ timestamp: -1 })
      .exec();
    return history;
  } catch (error) {
    throw new Error('Error fetching transaction history');
  }
};
