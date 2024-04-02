 //Sigleton

 // object literals
const jsUser = {
    name: "Dalpat Singh Ranawat",
    age: 21,
    location: "Jaipur",
    email: "dalpatsr@gmail.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Saturday"] 
} 


console.log(jsUser.lastLoggedinDays);
console.log(jsUser["location"]);

jsUser.email = "dsrana@gooogle.com";

console.log(jsUser["email"]);

// Object.freeze(jsUser);

jsUser.email = "dalpatsa@chatgpt.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello! Good Morning guys!!")
}
jsUser.greeting();
// console.log(jsUser);