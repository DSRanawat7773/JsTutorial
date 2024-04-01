const accountId = 123456;
let accountEmail = "dsrana@gmail.com"
var accountPass = "124536"
accountCity = "Jaipur"


console.log(accountId);

// accountId = 789456;  NOT ALLOWED FOR CONST VARIABLE
accountEmail = "Dalpat@google.com"
accountPass = "546888"
accountCity = "Bhilwara"
console.table([accountId, accountEmail, accountPass, accountCity])

/* prefer not to use var due to the block scope and functional scope */

/*--------OPERATIONS---------*/

let value = 3;
let negValue = -value;

console.log(negValue)

console.log(2+2)
console.log(2*3)
console.log(9/4)
console.log(7**2)

let str1 = "Jai";
let str2 = " Mataji";

console.log(str1*str2)
console.log(str1+str2)