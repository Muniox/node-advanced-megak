import { Router } from "express";
import { GiftRecord } from "../records/gift.record";
import { ValidationError } from "../utils/error";
import {CreateGiftReq, GetSingleGiftRes} from "../types";
export const giftRouter = Router();
// const { v4 } = require("uuid");

giftRouter
    .get('/', async (req, res) => {
        const giftList = await GiftRecord.listAll();
        res.json({
            giftList
        });
    })

    .get('/:giftId', async (req, res) => {
        const gift = await GiftRecord.getOne(req.params.giftId);
        const givenCount = await gift.countGivenGifts();

        res.json({
            gift,
            givenCount,
        } as GetSingleGiftRes);
    })

    .delete('/:id', async (req, res) => {
        const gift = await GiftRecord.getOne(req.params.id)

        if (!gift) {
            throw new ValidationError('No such gift!');
        }

        if (await gift.countGivenGifts() > 0) {
            throw new ValidationError('Cannot remove given gift.')
        }
        
        await gift.delete();

        res.end();
    })

    .post('/', async (req, res) => {
        const newGift = new GiftRecord(req.body as CreateGiftReq);
        await newGift.insert();

        res.json(newGift);
    });
