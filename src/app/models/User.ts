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

export class UserToken {
    public token: string;
    public tokenInfos: PopulateToken

    constructor(token: string, tokenInfo: PopulateToken) {
        this.token = token;
        this.tokenInfos = tokenInfo
    }
}

class PopulateToken {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public privateEmail: string,
        public admin: boolean,
        public roles: string[]
    ) {
    }
}