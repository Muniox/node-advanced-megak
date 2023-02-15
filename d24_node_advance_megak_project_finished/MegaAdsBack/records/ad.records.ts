import { FieldPacket } from "mysql2";
import { AdEntity, NewAdEntity, SimpleAdEntity } from "../types";
import { pool } from "../utils/database";
import {ValidationExpressError} from "../utils/errors";
import {v4 as uuid} from "uuid";

type AdRecordResults = [
    AdEntity[],
    FieldPacket[],
]

export class AdRecord implements AdEntity {
    public id: string;
    public name: string;
    public description: string;
    public price: number;
    public url: string;
    public lat: number;
    public lon: number;
    constructor(obj: NewAdEntity) {
        if (!obj.name || obj.name.length > 100) {
            throw new ValidationExpressError('Nazwa ogłoszenia nie może być pusta lub przekraczać 100 znaków.');
        }
        if (obj.description.length > 1024) {
            throw new ValidationExpressError('Treść ogłoszenia nie może przekraczać 1000 znaków.')
        }

        if (obj.price < 0 || obj.price > 9999999) {
            throw new ValidationExpressError('Cena nie może być mniejsza niż 0 lub większa niż 9 999 999,00.')
        }
        //@TODO: Check if URL is valid!
        if(!obj.url || obj.url.length > 100) {
            throw new ValidationExpressError('Link ogłoszenia nie może być pusty, ani przekraczać 100 znaków.')
        }
        if (typeof obj.lat !=='number' || typeof obj.lon !== 'number') {
            throw new ValidationExpressError('Nie można zlokalizować ogłoszenia')
        }

        this.id = obj.id
        this.name = obj.name;
        this.description = obj.description;
        this.price = obj.price;
        this.url = obj.url;
        this.lat = obj.lat;
        this.lon = obj.lon;
    };


    static async getOne(id: string): Promise<AdRecord | null> {
        const [results] = await pool.execute('SELECT * FROM `ads` WHERE `id` = :id', {
            id
        }) as AdRecordResults;
        return results.length === 0 ? null : new AdRecord(results[0]);
    };

    static async findAll(name: string):Promise<SimpleAdEntity[]> {
        const [results] = await pool.execute('SELECT * FROM `ads` WHERE `name` LIKE :search', {
            search: `%${name}%`,
        }) as AdRecordResults;

        return results.map((result) => {
            const {
                id,lat,lon
            } = result;

            return {
                id,lat,lon
            }
        });
        // return results.length === 0 ? null : results.map((result) => new AdRecord(result));
    };

    async insert(): Promise<void> {
        if(!this.id) {
            this.id = uuid();
        } else {
            throw new Error('Cannot insert something that is already inserted!');
        }

        await pool.execute(
            'INSERT INTO `ads`(`id`, `name`, `description`, `price`, `url`, `lat`, `lon`) VALUES(:id, :name, :description, :price, :url, :lat, :lon)', this)
    }
}