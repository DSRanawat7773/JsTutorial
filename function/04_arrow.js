const user = {
    username : "Dalpat",
    price : 399,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website!`);
        console.log(this)
    }
}

// user.welcomeMessage();

const chai = () => {                    /*1.)ARROW FUNCTION*/
    let username = "Dalpat"
    console.log(this);
}

chai();

const addTwo = (num1, num2) => (num1 + num2);

console.log(addTwo(2, 5));

