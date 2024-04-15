// // for of loop

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num);
// }

// const greeting  = "Jai Mataji";

// for(const word of greeting){
//     if(word==" "){
//         continue;
//     }
//     console.log(`Each char is "${word}"`);   
// }

//Maps

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');
map.set('IN', 'India');

// console.log(map); 

for(const [key, value] of map) {
    console.log(key, ':-', value);
}

//loop for objects

const myObj = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'swift by apple'
}


/*FOR IN LOOP :> IT TAKES THE KEYS LIKE THEIR INDEX OF ARRAY
WHILE FOR OF LOOP TAKES DIRECTLY THE VALUES INSIDE THE ARRAY*/
    
for(const key in myObj ) {
    console.log(`Key is ${key} and their value is ${myObj[key]}`);
}