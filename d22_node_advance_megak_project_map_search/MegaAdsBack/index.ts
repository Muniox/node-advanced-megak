import express from "express";
import cors from "cors";
import 'express-async-errors';
import { ValidationExpressError, handleError } from "./utils/errors";
import rateLimit from "express-rate-limit";

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json());
app.use(rateLimit({
    windowMs: 5 * 60 * 1000, //5 minutes
    max: 100, //Limit each IP to 100 requests per `window` (here, per 15 minutes)
}));


app.get('/', async (req, res) => {
    throw new ValidationExpressError('Damn');
});


app.use(handleError);

app.listen(3001, 'localhost', () => {
    console.log('Listening on port http://localhost:3001');
});