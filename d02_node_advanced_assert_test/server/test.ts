import {strict as assert} from 'assert';
import {handlebarsHelpers} from './utils/handlebars-helpers';
import { buildPerson } from './utils/foobar';

//deepStrictEqual
//sprawdza czy obiekt (wszystko jest obiektem) jest taki sam
assert.deepStrictEqual(
    buildPerson('Jan', 'Testowy'), 
    {
        name: 'Jan',
        surname: 'Testowy',
    }, 
    'Those are not the same people.',
);

//@TODO: A co jeżeli ktoś nie poda surname?

//strictEqual jest do zmiennych prymitywnych/prostych, nie działa z tablicami i obiektami
assert.strictEqual('Ala ma kota', 'ala ma kota', 'Those are not the same strings.');

//.throws() jest dla kodu synchronicznego
assert.throws(
    () => buildPerson('',''),
    {
        message: 'Name and surname should not be empty.'
    },
    'buildPerson() does not throw when empty name or surname.'
    
); //wyrzuca błąd, więc nie ma błędu

//.reject() jest dla kodu asynchronicznego
// assert.rejects(() => {});

//.doesNotThrow() jest dla kodu synchronicznego, jest przeciwieństwem throws
assert.doesNotThrow(
    () => buildPerson('Kuba','Testowy'),
    'buildPerson() throws.'
    
); //nie powinno nam wyrzucić błędu po poprawnym podaniu zmiennych

//assert.doesNotReject() //jest do kodu asynchronicznego