import {GiftRecord} from '../records/gift.record'
import {pool} from "../utils/db";

// zamiast tworzyć za każdym razem obiekt możemy stworzyć go tylko raz i na nim testować
let ng: GiftRecord
beforeAll(async () => {
    ng = new GiftRecord({
        name:'Tester',
        count: 123,
    });
});


// pierwszy sposób na nie zaśmiecanie sobie bazy danych
beforeEach(() => {
    // 1. wyczyść całą testowaną tabelę bazy danych.
    // 2. zwróć przewidywalne dane (wprowadzanie za każdym razem tych samych danych do bazy danych, żeby poźniej były one zwrócone).
})

afterAll(async () => {
    await pool.end();
})

test('Not inserted GiftRecord should have no id', async () => {
//    const ng = new GiftRecord({
//        name: 'Tester',
//        count: 123,
//    });

   expect(ng.id).toBeUndefined();
});

test('Not inserted GiftRecord should have no id', async () => {
    // const ng = new GiftRecord({
    //     name: 'Tester',
    //     count: 123,
    // });

    await ng.insert();

    expect(ng.id).toBeDefined();
    expect(ng.id).toMatch(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/)
});