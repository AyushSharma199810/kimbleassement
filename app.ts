import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import transactionRoutes from './src/routes/transactionRoutes';
import balanceRoutes from './src/routes/balanceRoutes';
import historyRoutes from './src/routes/historyRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (replace connection string with your MongoDB Atlas URI)
mongoose.connect('mongodb+srv://@cluster0.wvr5zh1.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(bodyParser.json());

app.use('/api/transaction', transactionRoutes);
app.use('/api/balance', balanceRoutes);
app.use('/api/history', historyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
