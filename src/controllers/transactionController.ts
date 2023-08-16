import { Request, Response } from "express";
import { createTransaction } from "../services/transactionServices";
import balanceModel, { BalanceModel } from "../models/balanceModel";

export const makeTransaction = async (req: Request, res: Response) => {
  try {
    const { from, to, amount } = req.body;
    if (!from || !to || !amount) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const transaction = await createTransaction(from, to, amount);
    const balance_ = await balanceModel.findOne({ address: from });
    await balanceModel.findOneAndUpdate(
      { address: from },
      {
        balance: balance_.balance - amount,
      }
    );
    res
      .status(201)
      .json({ message: "Transaction created successfully.", transaction });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while processing the transaction." });
  }
};
