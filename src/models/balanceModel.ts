import mongoose, { Document } from 'mongoose';

export interface BalanceModel extends Document {
  address: string;
  balance: number;
}

const balanceSchema = new mongoose.Schema({
  address: { type: String, required: true, unique: true },
  balance: { type: Number, default: 0 }
});

export default mongoose.model<BalanceModel>('Balance', balanceSchema);
