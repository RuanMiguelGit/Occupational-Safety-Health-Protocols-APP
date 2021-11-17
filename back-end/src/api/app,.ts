import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors';
import { userRouter } from '../api/routes'
export const app = express();


app.use(bodyParser.json());
app.use(cors());

app.use(userRouter);


