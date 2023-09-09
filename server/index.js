import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/route.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
