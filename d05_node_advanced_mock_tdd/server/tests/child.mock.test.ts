import {ChildRecord} from '../records/child.record';

//korzystając ze wczesniejszego sposobu tworzymy sobie obiekt, który zawsze będziemy używać:
let child: ChildRecord;
beforeAll(async () => {
    child = await ChildRecord.getOne('7777777');
});


//dla zwykłych metod:
jest
    .spyOn(ChildRecord.prototype, 'update')
    .mockImplementation(async () => {});

// dla metod statycznych:
jest 
    .spyOn(ChildRecord, 'getOne')
    .mockImplementation(async (id: string) => {
        return new ChildRecord({
            id,
            name: 'Testowy',
            giftId: '123',
        } as ChildRecord);
    });

    //Zrobiliśmy sobie takiego mocka, że zawsze istnieje każde dziecko o każdym id, i jest to przewidywalne

test('test funkction getOne to return one child record from database', async () => {
    // const child = await ChildRecord.getOne('7777777');

    console.log(child)

    expect(child).toBeDefined();
    expect(child.id).toEqual('7777777');
});

test('', async () => {
    // const child = await ChildRecord.getOne('7777777');
    await child.update();
});

