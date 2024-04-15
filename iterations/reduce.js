
const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce(function (acc, currvalue){
//     console.log(`acc: ${acc} and currval: ${currvalue}`);

//     return acc + currvalue;
// }, 0)

const myTotal = myNums.reduce( (acc, currval) => acc + currval ,0)
console.log(myTotal);