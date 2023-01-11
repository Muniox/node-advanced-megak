import { Router } from "express";
import { ChildRecord } from "../records/child.record";
import { GiftRecord } from "../records/gift.record";
import { ValidationError } from "../utils/error";
export const childRouter = Router();


childRouter
    .get('/', async (req, res) => {
        const childrenList = await ChildRecord.listAll();
        const giftsList = await GiftRecord.listAll();
        res.json({
            childrenList,
            giftsList,
        });
    })

    .post('/', async (req, res) => {
        const newChild = new ChildRecord(req.body);
        await newChild.insert();
        res.redirect('/child');
    })

    .patch('/gift/:childId', async (req, res) => {
        const child = await ChildRecord.getOne(req.params.childId);

        if(child === null) {
            throw new ValidationError('Nie znaleziono dziecka z podanym ID');
        }

        const gift = req.body.giftId === '' ? null : await GiftRecord.getOne(req.body.giftId);

        if (gift) {
            if (gift.count <= await gift.countGivenGifts()) {
                throw new ValidationError('Tego prezentu jest za mało');
            }
        }

        child.giftId = (gift === null)? null : gift.id;
        await child.update();
        res.redirect('/child');
    });


