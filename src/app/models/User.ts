export class User {
    constructor(
        public Name: string,
        public Email: string,
        public PrivateEmail: string,
        public Password: string,
        public RA: string
    ) { }
}

export class UserLogin {
    public Email: string;
    public Password: string;

    constructor(email: string, password: string) {
        this.Email = email;
        this.Password = password;
    }
}