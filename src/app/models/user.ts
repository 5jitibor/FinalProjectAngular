export class User {
    name: string;
    surname: string;
    email: string;
    gender: string;
    password: string;
    birth: Date;
  
    constructor(obj?: any) {
      this.name = obj && obj['name'] ? obj['name'] : null;
      this.surname = obj && obj['surname'] ? obj['surname'] : null;
      this.gender = obj && obj['gender'] ? obj['gender'] : null;
      this.email = obj && obj['email'] ? obj['email'] : null;
      this.password = obj && obj['password'] ? obj['password'] : null;
      this.birth = obj && obj['birth'] ? obj['birth'] : null;
    }
  }
