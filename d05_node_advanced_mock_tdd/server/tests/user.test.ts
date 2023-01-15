interface User {
   isLogged: boolean;
   email: string;
   password: string;
}

let user: User

beforeAll(() => {
    user = new User();
});