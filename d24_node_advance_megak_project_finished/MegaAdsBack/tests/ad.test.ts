import { AdRecord } from "../records/ad.records"
import { AdEntity } from "../types";
import { pool } from "../utils/database";

afterAll(async () => {
    await pool.end();
});

const defaultObj = {
    name: 'Test Name',
    description: 'blah',
    url: 'http://megak.pl',
    price: 0,
    lat: 9,
    lon: 9,
}

test('AdRecord.getOne returns data from database for one entry.', async () => {
    const ad = await AdRecord.getOne('abc');

    console.log(ad)

    expect(ad).toBeDefined();
    expect(ad.id).toBe('abc');
    expect(ad.name).toBe('Testowa');

});

test('AdRecord.getOne returns null from database for unexisting entry.', async () => {
    const ad = await AdRecord.getOne('---');

    expect(ad).toBeNull();
});


test('AdRecord.findAll returns array of found entries.', async () => {
    const ads = await AdRecord.findAll('');

    expect(ads).not.toEqual([]);
    expect(ads[0]).toBeDefined();
});

test('AdRecord.findAll returns array of found entries when searching for "a".', async () => {
    const ads = await AdRecord.findAll('a');

    expect(ads).not.toEqual([]);
    expect(ads[0]).toBeDefined();
});

test('AdRecord.findAll returns empty array when searching for something that does not exists.', async () => {
    const ads = await AdRecord.findAll('------------------------------');

    expect(ads).toEqual([]);
});

test('AdRecord.findAll returns smaller amount of data.', async () => {
    const ads = await AdRecord.findAll('');

    expect(ads[0].id).toBeDefined();
    expect((ads[0] as AdEntity).price).toBeUndefined();
    expect((ads[0] as AdEntity).description).toBeUndefined();
});

test('AdRecord.insert returns UUID.', async () => {
    const ad = new AdRecord(defaultObj);

    await ad.insert();

    expect(ad.id).toBeDefined();
    expect(typeof ad.id).toBe('string');
});

test('AdRecord.insert inserts data to database.', async () => {
    const ad = new AdRecord(defaultObj);

    await ad.insert();
    const foundAd = await AdRecord.getOne(ad.id);

    expect(foundAd).toBeDefined();
    expect(foundAd).not.toBeNull();
    expect(foundAd.id).toBe(ad.id);
});