class user{
    constructor(name, password){
        this.name = name;
        this.password = password;
    }

    get password(){
        return this._password1.toUpperCase();
    }

    set password(value){
        this._password1 = value.toUpperCase();
    }
}

const chai = new user("Dalpat", 'abc');

console.log(chai.password);