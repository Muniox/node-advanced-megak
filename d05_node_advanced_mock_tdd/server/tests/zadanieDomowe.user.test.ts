import { User } from "../records/user";

let user: User

beforeAll(() => {
    user = new User();
});

test('User should not be logged in at the beginning', () => {
    expect(user.loggedIn).toEqual(false);
});

// test('User logged in state should not be modified outside of class', () => {
//     expect(() => {
//         user._loggedIn = true
//     }).toThrow();
// });

test('User should have no e-mail at the beginning', () => {
    expect(user.email).toBeNull();
});

// test('User email state should not be modified outside of class', () => {
//     expect(() => {
//         user._email = '...'
//     }).toThrow();
// });

test('LogIn should return true after provide correct password and email', () => {
    const password = '1234';
    const email = 'wp@pl';

    expect(user.logIn(password, email)).toEqual(true)
})

test