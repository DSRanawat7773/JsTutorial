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