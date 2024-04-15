
const coding =  ["js", "ruby", "Java", "python", "cpp"]

// var values = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
// } )

// console.log(values)

const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = MyNums.filter( (num) => num > 4 )

const nayaNum = [];
// const newNums = MyNums.filter( (num) => {
//     if(num>4){
//         nayaNum.push(num)
//     }
// } )

MyNums.forEach( (num) => {
    if(num>4){
        nayaNum.push(num+5)
    }
} )

// console.log(newNums);
console.log(nayaNum)