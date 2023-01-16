export class User {
    private _loggedIn = false;
    private _email: string | null = null;
    password: string

    get loggedIn(): boolean {
        return this._loggedIn
    }

    get email(): string {
        return this._email
    }

    set userEmail(email: string) {
        this._email = email
    }

    set userLogInStatus(status: boolean) {
        this._loggedIn = status
    }

    logIn(password: string, email: string): boolean {
        if (password === '1234' && email.length > 0){
            this.userEmail = email;
            this.userLogInStatus = true;
            return true
        } 

        return false
    }
}

// niektórych elementów nie da się przetestowac, bo sa one związane stricte z jęxykiem programowania
// w tym przypadku z Typescriptem