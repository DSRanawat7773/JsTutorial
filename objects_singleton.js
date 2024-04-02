// const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = "123abs";
tinderUser.name = "Dalpat";
tinderUser.isLoggedIn = false; 

// console.log(tinderUser);

const regualUser = {
    email: "dalpatsa@gmail.com",
    fullname: {
        firstName: "Dalpat",
        lastName: "Singh"
    }
}

console.log(regualUser["fullname"]);

const obj1 = {a:1, b:2}
const obj2 = {c:3, d:4}
const obj3 = {e:3, f:6}

// const obj4 = {obj1, obj2, obj3}

// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}      //SPREAD METHOD
console.log(obj4)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));