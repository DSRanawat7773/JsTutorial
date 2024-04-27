//ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}@${this.username}abc`;
    }
}

const chai = new User("Dalpat", "dsrana@gmail.com", "Banna");

console.log(chai.encryptPassword());