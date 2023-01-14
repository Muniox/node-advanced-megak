import {ChildRecord} from '../records/child.record';
import {pool} from "../utils/db";

afterAll(async () => {
    await pool.end();
})

test('Check if ChildRecord return list of all children', async () => {

    const children = await ChildRecord.listAll();

    expect(children).toBeDefined();

});

// test('Not inserted ChildRecord should have no id', async () => {
//
//     const nc = new ChildRecord({
//         name: 'Tester',
//         giftId: 'xxxxx',
//     });
//
//     expect(nc).toBeDefined();
//
// })