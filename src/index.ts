import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

import diaryRouter from './routes/diaries';

const PORT = 3001;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});