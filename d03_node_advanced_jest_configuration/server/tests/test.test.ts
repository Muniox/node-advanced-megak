import { buildPerson } from "../utils/foobar";

/**wpisujemy sobie, że mamy test, to jest funkcja, która przyjmuje dwa argumenty
 * @param string pierwszy argument to jest nazwa tego co testujemy, stan faktyczny dobry, który oczekujemy
 * @param funkcja jest to funkcja(callback), która wykonuje nam cały test za pomocą chaining'u
*/
test('adds 1 + 2 to equal 3', () => {

    expect(1 + 2).toBe(3);

});

/**
 * wbudowane mozliwości testowania, czyli co możemy wykorzystać
 * toBe() - jest to odpowiednik ===
 * toEqual() - dokładne porównanie obiektów
 * toBeNull(), toBeUndefined(), toBeDefined(), toBeTruthy(), toBeFalsy()
 * tobeGraterThan(), toBeGreaterThanOrEqual(), toBeLessThan(), toBeLessThanOrEqual(), toBeCloseTo() (ważne! 0.1 + 0.2)
 */

//porównywanie obiektów z funkcją .toStrictEqual
 test('adds 1 + 2 to equal 3', () => {

    const person1 = {
        firstName: 'Anna',
        lastName: 'Testowa',
        age: 123,
    };

    const person2 = {
        ...person1,
        lastName: 'Następna',
        bio: 'lorem ipsum dolar sit amet...'
    };

    expect(person1).toStrictEqual(person2);

});

test('check if argument is null', () => {

    expect(null).toBeNull()

});

test('check if argument is defined', () => {

    expect('Ala ma kota').toBeDefined()

});

//sprawdzenie funkcji buildPerson
test('buildPerson should return something', () => {

    expect(buildPerson('Marek', 'Marecki')).toBeDefined()

});