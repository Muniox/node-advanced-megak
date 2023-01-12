import { pool } from "../utils/db";
import { ValidationError } from "../utils/error";
import { v4 as uuid } from "uuid";
import { FieldPacket } from "mysql2";

type ChildRecordsResults = [ChildRecord[], FieldPacket[]];

export class ChildRecord {
    public id?: string;
    public name: string;
    public giftId: string;

    constructor(obj: ChildRecord) {
        if (!obj.name || obj.name.length < 3 || obj.name.length > 25) {
            throw new ValidationError('Imię musi mieć od 3 dp 55 znaków');
        }


        this.id = obj.id;
        this.name = obj.name;
        this.giftId = obj.giftId;
    }

    async insert(): Promise<string> {
        if (!this.id) {
            this.id = uuid();
        }

        await pool.execute("INSERT INTO `children`(`id`,`name`) VALUES (:id, :name)", {
            id: this.id,
            name: this.name,
        });
        return this.id;
    }

    async update(): Promise<void> {
        await pool.execute("UPDATE `children` SET `children`.`name` = :name,  `children`.`giftId` = :giftId  WHERE `children`.`id` = :id", {
            id: this.id,
            name: this.name,
            giftId: this.giftId
        });
    }

    static async listAll(): Promise<ChildRecord[]> {
        const [results] = await pool.execute('SELECT * FROM `children` ORDER BY `name` ASC') as ChildRecordsResults;
        return results.map(obj => new ChildRecord(obj));
    }

    static async getOne(id: string): Promise<ChildRecord | null> {
        const [result] = await pool.execute('SELECT * FROM `children` WHERE `children`.`id` = :id', {
            id,
        }) as ChildRecordsResults;
        return result.length === 0 ? null : new ChildRecord(result[0]);
    }
}

