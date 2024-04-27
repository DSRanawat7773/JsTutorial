class User{
    constructor(username, Email, password){
        this.username = username;
        this.Email = Email;
        this.password = password;
    }

    Login(){
        return `Logged In!`
    }
}

class Teacher extends User{
    constructor(username, Email, password){
        super(username);
        this.Email = Email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const Tea = new Teacher("Dalpat", "DS@gmail.com", "123abc")
Tea.addCourse();