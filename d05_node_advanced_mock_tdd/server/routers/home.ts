import { Router } from "express";
export const homeRouter = Router();

homeRouter
    .get('/', (req, res) => {
        res.redirect('/child');
    });

