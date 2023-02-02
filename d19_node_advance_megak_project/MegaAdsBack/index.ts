import express from "express";
import cors from "cors";
import { ValidationExpressError, handleError } from "./utils/errors";
import 'express-async-errors';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json());


app.get('/', async (req, res) => {
    throw new ValidationExpressError('Damn');
});


app.use(handleError);

app.listen(3001, 'localhost', () => {
    console.log('Listening on port http://localhost:3001');
});