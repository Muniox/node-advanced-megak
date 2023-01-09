import * as dotenv from "dotenv";
dotenv.config();
import './utils/db'; 
import * as express  from "express";
import 'express-async-errors';
import * as cors from "cors";
import { handleError } from "./utils/error";
import { homeRouter } from "./routers/home";
import { childRouter } from "./routers/child";
import { giftRouter } from "./routers/gift";

const app = express();
const PORT = process.env.PORT as unknown as number;
const ADDRESS = process.env.ADDRESS; //jeśli chcemy, żeby było dla wszystkich dajemy 0.0.0.0

app.use(cors({
    // origin: "*",
    origin: 'http://localhost:5173'
}))
app.use(express.json());
app.use(express.static('public'))

app.use('/', homeRouter);
app.use('/child', childRouter);
app.use('/gift', giftRouter);
app.use(handleError);

app.listen(PORT, ADDRESS, () => {
    console.log(`serwer nasłuchuje na http://${ADDRESS}:${PORT}`);
});