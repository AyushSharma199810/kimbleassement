import TransactionModel from '../models/transactionModel';

export const createTransaction = async (from: string, to: string, amount: number) => {
  try {
    const transaction = new TransactionModel({ from, to, amount });
    await transaction.save();
    return transaction;
  } catch (error) {
    throw new Error('Error creating transaction');
  }
};
