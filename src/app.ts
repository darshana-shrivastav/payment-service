import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index.routes';
const dotenv = require('dotenv');
dotenv.config();

const app: Application = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', routes);

export default app;