import mongoose, { Document } from 'mongoose';

export interface TransactionModel extends Document {
  from: string;
  to: string;
  amount: number;
  timestamp: Date;
}

const transactionSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  amount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model<TransactionModel>('Transaction', transactionSchema);
