import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import answerRoutes from './routes/Answer.js';
import questionRoutes from './routes/Questions.js';
import userRoutes from './routes/users.js';
import LocationRoutes from './routes/Location.js';

const app = express();
dotenv.config();
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Day/Night Route
const isDaytime = () => {
  const now = new Date();
  const hours = now.getHours();
  return hours >= 6 && hours < 18; // Assuming daytime is from 6 AM to 6 PM
};

app.get('/api/daynight', (req, res) => {
  const isDay = isDaytime();
  res.json({ isDay });
});

app.get('/', (req, res) => {
  res.send('This is a stack overflow clone API');
});

app.use('/user', userRoutes);
app.use('/questions', questionRoutes);
app.use('/answer', answerRoutes);
app.use('/api/userlocation', LocationRoutes);


const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.CONNECTION_URL;

mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
