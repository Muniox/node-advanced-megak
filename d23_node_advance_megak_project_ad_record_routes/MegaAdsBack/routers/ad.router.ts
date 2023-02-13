import { Router } from "express";

export const adRouter = Router()
    .get('/', async (req, res) => {
        res.json({
            ok: true,
        })
    })